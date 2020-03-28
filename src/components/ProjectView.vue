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

    export default {
        name:     'project-view',
        data() {
            return {
                projects: [
                    {
                        title:       'X-Lights',
                        category:    'Webappp | LEDs',
                        tags:        [5, 4, 1, 2, 3],
                        images:      ['xl1.jpg', 'xl2.jpg', 'xl3.jpg'],
                        description: "X-Lights is probably my largest programming project, it combines a variety of technologies to create an unique LED controller.<br>Sound's simple, and to be honest, it is, but a lot of simplicity brings complexity.<br>With X-Lights (to be renamed) you can control multiple LED strips all over the world. You can synchronize them, or let them all play their own unique show.<br>X-Lights also supports sensors as inputs - you could use a light sensor to turn on your lights when it's dark, or let them glow red when your room has a certain temperature. As a programmer you can also easily create new light modes and extend existing functionality.<br><br>X-Lights consist of:<br>A NodeJS Server running a websocket<br>A VueJS webapp to control the lights<br>A Wemos D1 Mini microcontroller<br>A small C# client that analyzes music<br><br><a href='https://marius12375.github.io/#/' target='_blank'>Here's a little demo</a><br><a href='https://github.com/marius12375/x-lights-demo' target='_blank'>GitHub Repo</a>",
                    },
                    {
                        title:       'Spacepilot',
                        category:    'Android Game [C#]',
                        tags:        [4],
                        images:      ['Spaceship.jpg'],
                        description: "Spacepilot is a game for android smartphones.<br>It's made with <a href='http://www.monogame.net/' target='_blank'>Monogame</a> for C#.<br>You play as an pilot of a spaceship, and your objective is to destroy enemy fighters.<br>Really simple, but highly addictive ;)<br> Can you be the hero who saves the world from these evil guys?<br><br>The project will be uploaded to my <a href='https://github.com/marius12375' target='_blank'>GitHub</a> account soon, stay tuned!",
                    },
                    {
                        title:       'Liquicalc',
                        category:    'Liquid Calculator [Flutter]',
                        tags:        [6],
                        images:      ['lq1.png', 'lq2.png', 'lq3.png'],
                        description: "LiquiCalc was my first project that\'s realised in Flutter with Google's <a href='https://dart.dev/' target='_blank'>Dart</a> programming language.<br>Flutter is a framework created to design Android and IOS apps easily.<br><br>With LiquiCalc you can create awesome aroma recipes for your e-liquids!<br>It includes a wide variety of pre-existing recipes, but you can also add your own ones.<br>You\'re able to share created recipes with friends and the community.<br><br>The project will be uploaded to my <a href=\'https://github.com/marius12375\' target=\'_blank\'>GitHub</a> account soon, stay tuned!",
                    },
                    {
                        title:       'BetterKLM',
                        category:    'Keyboard Light Manager [C#]',
                        tags:        [4],
                        images:      ['betterklm1.jpg', 'betterklm2.jpg'],
                        description: "BetterKLM is a C# application made for controlling the led keyboard of the MSI GE60 Apache gaming laptop.<br>The existing keyboard light manager misses some features I really wanted to have, so I built my own small application.<br>",
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
            getTeaserImageStyle(project) {
                if (project && project.images.length > 0) {
                    const image = require(`./../assets/images/projects/${project.images[0]}`);
                    return `background-image: url('${image}')`;
                }
            },
        },
    };
</script>
