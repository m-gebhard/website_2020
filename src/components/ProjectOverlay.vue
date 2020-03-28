<template>
    <div v-if="true" class="project-overlay">
        <div class="project-overlay__content">
            <div class="project-overlay__content-close">
                <font-awesome-icon icon="times"></font-awesome-icon>
            </div>
            <h2 class="project-overlay__content-title">
                {{ project.title }}
            </h2>
            <p class="project-overlay__content-description">
                {{ project.description }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'project-overlay',
        data() {
            return {
                project: {
                    title:       'X-Lights',
                    date:        'Fri. 20th May',
                    tags:        [5, 4, 1, 2, 3],
                    images:       ['https://placeimg.com/640/480/nature'],
                    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                },
            };
        },
    };
</script>
