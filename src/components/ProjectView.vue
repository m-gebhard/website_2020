<template>
    <div class="project-view">
        <transition-group tag="ul" name="list" class="project-view__list">
            <li v-for="(project, i) in getFilteredProjects"
                :key="`project-view-item-#${i}`"
                class="project-view__list-item"
                @click="openProject(project)">
                <div class="project-view__list-item-content">
                    <h3 class="project-view__list-item-title">
                        {{ project.title }}
                    </h3>
                    <p class="project-view__list-item-category">
                        {{ project.category }}
                    </p>
                    <div v-if="project.images.length > 0"
                         :style="getTeaserImageStyle(project)"
                         class="project-view__list-item-image"></div>
                </div>
            </li>
        </transition-group>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import { projects }               from '../utils/projects';

    export default {
        name:     'project-view',
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
            getTeaserImageStyle(project) {
                if (project && project.images.length > 0) {
                    const image = require(`./../assets/images/projects/${project.images[0]}`);
                    return `background-image: url('${image}')`;
                }
            },
        },
    };
</script>
