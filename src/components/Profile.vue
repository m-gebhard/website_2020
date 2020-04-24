<template>
    <div class="profile">
        <ul class="profile__wrapper">
            <li class="profile__item">
                <font-awesome-icon icon="user"></font-awesome-icon>
                <h3>Who am I?</h3>
                <p class="profile__item-description">
                    My Name is Marius Gebhard.<br>
                    I am 22 years old and I live in Mannheim, Germany.
                    In my free time I like to code and do sports.
                    What do I code? Anything you can imagine - it just depends on the project I am working on.
                </p>
            </li>
            <li class="profile__item">
                <font-awesome-icon icon="code"></font-awesome-icon>
                <h3>What do I do?</h3>
                <p class="profile__item-description">
                    Write code. A lot of code<br>
                    My main focus is frontend development, I love to build fancy websites and share my designs and ideas
                    with customers. Besides frontend programming I also do backend and app-programming.
                </p>
            </li>
            <li class="profile__item">
                <font-awesome-icon icon="chart-bar"></font-awesome-icon>
                <h3>Coding Skills</h3>
                <ul class="profile__item-chart">
                    <li v-for="(skill, i) in getSkills"
                        :key="`profile-chart-item-#${i}`"
                        :style="chartItemStyle(skill)"
                        v-html="skill.name"
                        class="profile__item-chart-item">
                    </li>
                </ul>
            </li>
            <li class="profile__item profile__item--skill">
                <h3>FE Experience</h3>
                <div class="profile__item-description">
                    I have 4 years of frontend experience with the following technologies:<br><br>
                    <a class="profile__item-description--link profile__item-description--link-with-icon"
                       href="https://en.wikipedia.org/wiki/HTML5"
                       target="_blank">
                        HTML5
                        <font-awesome-icon :icon="['fab', 'html5']"></font-awesome-icon>
                    </a>
                    <a class="profile__item-description--link profile__item-description--link-with-icon"
                       href="https://vuejs.org/"
                       target="_blank">
                        Vue.js
                        <font-awesome-icon :icon="['fab', 'vuejs']"></font-awesome-icon>
                    </a>
                    <a class="profile__item-description--link profile__item-description--link-with-icon"
                       href="https://sass-lang.com/"
                       target="_blank">
                        SASS
                        <font-awesome-icon :icon="['fab', 'sass']"></font-awesome-icon>
                    </a>
                    <a class="profile__item-description--link profile__item-description--link-with-icon"
                       href="https://getbootstrap.com/"
                       target="_blank">
                        Bootstrap
                        <font-awesome-icon :icon="['fab', 'bootstrap']"></font-awesome-icon>
                    </a>
                </div>
            </li>
            <li class="profile__item profile__item--skill">
                <h3>BE Experience</h3>
                <div class="profile__item-description">
                    I have 3 years of backend experience with the following technologies:<br><br>
                    <a class="profile__item-description--link profile__item-description--link-with-icon"
                       href="https://nodejs.org/en/"
                       target="_blank">
                        node.js
                        <font-awesome-icon :icon="['fab', 'node-js']"></font-awesome-icon>
                    </a>
                    <a class="profile__item-description--link profile__item-description--link-with-icon"
                       href="https://en.wikipedia.org/wiki/PHP"
                       target="_blank">
                        PHP7
                        <font-awesome-icon :icon="['fab', 'php']"></font-awesome-icon>
                    </a>
                    <a class="profile__item-description--link profile__item-description--link-with-icon"
                       href="https://laravel.com/"
                       target="_blank">
                        Laravel
                        <font-awesome-icon :icon="['fab', 'laravel']"></font-awesome-icon>
                    </a>
                </div>
            </li>
            <li class="profile__item profile__item--skill">
                <font-awesome-icon icon="microchip"></font-awesome-icon>
                <h3>Hardware</h3>
                <p class="profile__item-description">
                    In 11th class I learned on how to program micro-controllers and how they work, until today I love
                    building little things with uC's and other hardware. A good example is my project
                    <span class="profile__item-description--link" @click="$parent.$parent.$scrollTo(2)">X-Lights</span>.
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
    import { skills } from '../utils/skills';

    export default {
        name:     'profile',
        computed: {
            getSkills() {
                return skills;
            },
        },
        methods:  {
            chartItemStyle(item) {
                return {
                    height: `${item.percentage}%`,
                };
            },
        },
    };
</script>
