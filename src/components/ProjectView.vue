<template>
    <div class="project-view">
        <transition-group tag="ul" name="list" class="swiper-wrapper project-view__list">
            <li v-for="(project, i) in getProjects"
                :key="`project-view-item-#${i}`"
                v-if="isProjectVisible(project)"
                class="project-view__list-item swiper-slide"
                @click="openProject(project)">

                <div class="project-view__list-item-content"
                     :class="`project-view__list-item-content--type-${project.type}`">
                    <h3 class="project-view__list-item-title">
                        {{ project.title }}
                    </h3>
                    <p class="project-view__list-item-category">
                        {{ project.category }}
                    </p>
                    <div v-if="project.images.length > 0"
                         :style="getTeaserImageStyle(project)"
                         class="project-view__list-item-image">
                    </div>
                </div>
            </li>
        </transition-group>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper                     from 'swiper';
    import { mapGetters, mapActions } from 'vuex';
    import { projects }               from '../utils/projects';

    export default {
        name:     'project-view',
        mounted() {
            this.initSwiper();
        },
        data() {
            return {
                swiper: null,
            };
        },
        computed: {
            ...mapGetters(['getSelectedFilter']),

            getFilteredProjects() {
                const parsed = parseInt(this.getSelectedFilter);

                if (parsed === 0) return this.getProjects;
                return this.getProjects.filter((_project) => _project.tags.indexOf(parsed) !== -1);
            },
            getProjects() {
                return projects;
            }
        },
        methods:  {
            ...mapActions(['setModalOpenState']),

            openProject(project) {
                this.setModalOpenState({
                    key:       'project-modal',
                    openState: true,
                    payload:   project,
                });
            },
            isProjectVisible(project) {
                return this.getFilteredProjects.indexOf(project) !== -1;
            },
            getTeaserImageStyle(project) {
                if (project && project.images.length > 0) {
                    const image = require(`./../assets/images/projects/${project.images[0]}`);
                    return `background-image: url('${image}')`;
                }
            },
            initSwiper() {
                if (this.swiper) {
                    this.swiper.destroy();
                }

                this.$nextTick(() => {
                    this.swiper = new Swiper('.project-view', {
                        slidesPerColumnFill: 'row',
                        breakpoints:         {
                            0:    {
                                slidesPerView:   1.05,
                                slidesPerColumn: 2,
                            },
                            701:  {
                                slidesPerView:   2,
                                slidesPerColumn: 2,
                            },
                            1301: {
                                slidesPerView:   3,
                                slidesPerColumn: 2,
                            }
                        },
                        pagination:          {
                            clickable: true,
                            el:        '.swiper-pagination',
                        },
                    });
                });
            }
        },
        watch:    {
            'getSelectedFilter'() {
                this.$nextTick(() => {
                    this.swiper.update();
                });
            },
        },
    };
</script>
