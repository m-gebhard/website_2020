<template>
    <div v-if="isOpen" class="project-overlay">
        <div class="project-overlay__content">
            <div class="project-overlay__content-scroll-container">
                <div class="project-overlay__content-close"
                     @click.prevent="close">
                    <font-awesome-icon icon="times"></font-awesome-icon>
                </div>

                <h2 class="project-overlay__content-title">
                    {{ project.title }}
                </h2>
                <p class="project-overlay__content-description">
                    {{ project.description }}
                </p>

                <div v-if="project.images.length > 0" class="project-overlay__content-slider-container">
                    <div class="swiper-wrapper">
                        <div v-for="image in project.images"
                             :style="{backgroundImage: `url(${image})`}"
                             class="swiper-slide">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper                     from 'swiper';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name:     'project-overlay',
        data() {
            return {
                project: null,
            };
        },
        mounted() {
            const swiper = new Swiper('.project-overlay__content-slider-container', {
                loop:          true,
                preloadImages: true,
                slidesPerView: 2,
                breakpoints:   {
                    701:  {
                        slidesPerView: 3,
                    },
                    1301: {
                        slidesPerView: 4,
                    }
                },
            });
        },
        computed: {
            ...mapGetters(['getModalOpenState', 'getModal']),

            modal() {
                return this.getModal('project-modal');
            },
            isOpen() {
                return this.getModalOpenState('project-modal');
            },
        },
        methods:  {
            ...mapActions(['setModalOpenState']),

            init() {
                this.project = this.modal.payload;
            },
            close() {
                this.setModalOpenState({
                    key:       'project-modal',
                    openState: false,
                });
            },
        },
        watch:    {
            isOpen(open) {
                if (open) {
                    this.init();
                }
            },
        },
    };
</script>
