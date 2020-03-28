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
                    <p class="project-view__list-item-date">
                        {{ project.date }}
                    </p>
                    <div v-if="project.images.length > 0"
                         :style="{background: `url(${project.images[0]})`}"
                         class="project-view__list-item-image"></div>
                </div>
            </li>
        </transition-group>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name:     'project-view',
        data() {
            return {
                projects: [
                    {
                        title:       'X-Lights',
                        date:        'Fri. 20th May',
                        tags:        [5, 4, 1, 2, 3],
                        images:      ['https://placeimg.com/640/480/nature', 'https://placeimg.com/640/480/animals', 'https://placeimg.com/640/480/technology'],
                        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                    {
                        title:       'Spacepilot',
                        date:        'Sun. 22th May',
                        tags:        [4],
                        images:      ['https://placeimg.com/640/480/technology'],
                        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                    {
                        title:       'Liquicalc',
                        date:        'Fri. 20th May',
                        tags:        [6],
                        images:      ['https://placeimg.com/640/480/technology'],
                        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                    {
                        title:       'BetterKLM',
                        date:        'Thu. 5th October',
                        tags:        [4],
                        images:      ['https://placeimg.com/640/480/technology'],
                        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                ]
            };
        },
        computed: {
            ...mapGetters(['getSelectedFilter']),

            getFilteredProjects() {
                const parsed = parseInt(this.getSelectedFilter);

                if (parsed === 0) return this.projects;
                return this.projects.filter((_project) => _project.tags.indexOf(parsed) !== -1);
            },
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
        },
    };
</script>
