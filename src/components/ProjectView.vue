<template>
    <div class="project-view">
        <div class="project-view__filter">
            <font-awesome-icon icon="th-list"></font-awesome-icon>
            <select v-model="selectedFilter" class="project-view__filter-select" id="filter">
                <option v-for="(tag, i) in getAvailableTags"
                        :value="i">
                    {{ tag }}
                </option>
            </select>
        </div>
        <transition-group tag="ul" name="list" class="project-view__list">
            <li v-for="(project, i) in getFilteredProjects"
                :key="`project-view-item-#${i}`"
                class="project-view__list-item">
                <h3 class="project-view__list-item-title">
                    {{ project.title }}
                </h3>
                <p class="project-view__list-item-date">
                    {{ project.date }}
                </p>
                <div :style="{background: `url(${project.image})`}"
                     class="project-view__list-item-image"></div>
            </li>
        </transition-group>
    </div>
</template>

<script>
    import AVAILABLE_TAGS from '../utils/availableTags';

    export default {
        name:     'project-view',
        data() {
            return {
                selectedFilter: 0,
                projects:       [
                    {
                        title:       'X-Lights',
                        date:        'Fri. 20th May',
                        tags:        [5, 4, 1, 2, 3],
                        image:       'https://placeimg.com/640/480/nature',
                        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                    {
                        title:       'Spacepilot',
                        date:        'Sun. 22th May',
                        tags:        [4],
                        image:       'https://placeimg.com/640/480/technology',
                        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                    {
                        title:       'Liquicalc',
                        date:        'Fri. 20th May',
                        tags:        [6],
                        image:       'https://placeimg.com/640/480/technology',
                        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                    {
                        title:       'BetterKLM',
                        date:        'Thu. 5th October',
                        tags:        [4],
                        image:       'https://placeimg.com/640/480/technology',
                        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                ]
            };
        },
        computed: {
            getAvailableTags() {
                return AVAILABLE_TAGS;
            },
            getFilteredProjects() {
                const parsed = parseInt(this.selectedFilter);

                if (parsed === 0) return this.projects;
                return this.projects.filter((_project) => _project.tags.indexOf(parsed) !== -1);
            },
        },
    };
</script>
