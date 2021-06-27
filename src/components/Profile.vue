<template>
    <div class="profile">
        <ul class="profile__wrapper">
            <li class="profile__item">
                <div>
                    <div class="profile__item-head">
                        <font-awesome-icon icon="user"></font-awesome-icon>
                        <h3>Who am I?</h3>
                    </div>
                    <p class="profile__item-description">
                        My Name is Marius Gebhard.<br>
                        I am 24 years old and I live in Mannheim, Germany.
                        In my free time I like to code, make music and do graphics design.
                        What do I code? Anything you can imagine - it just depends on the project I am working on.
                    </p>
                </div>
            </li>
            <li class="profile__item">
                <div>
                    <div class="profile__item-head">
                        <font-awesome-icon icon="code"></font-awesome-icon>
                        <h3>What do I do?</h3>
                    </div>
                    <p class="profile__item-description">
                        Write code. A lot of code.<br>
                        My main focus is frontend development, I love to build fancy websites and share my designs and
                        ideas
                        with customers. Besides frontend programming I also do backend and app-programming.
                        <a href="https://github.com/m-gebhard" target="_blank">
                            Projects on GitHub
                            <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
                        </a>
                    </p>
                </div>
            </li>
            <li class="profile__item">
                <div>
                    <div class="profile__item-head">
                        <font-awesome-icon icon="rocket"></font-awesome-icon>
                        <h3>Apps and Games</h3>
                    </div>
                    <p class="profile__item-description">
                        Besides web programming I also love to build apps and small desktop games.
                        Back then in C# / Java, now with Dart and Javascript, and there's always more to explore!
                        Take a look at the
                        <a href="#" class="profile__item-description--link-light"
                              @click.prevent="$parent.$parent.$scrollTo(2)">project section</a>
                        to learn more.
                    </p>
                </div>
            </li>
            <li class="profile__item profile__item--skill">
                <div>
                    <div class="profile__item-head">
                        <font-awesome-icon icon="chart-bar"></font-awesome-icon>
                        <h3>Coding Skills</h3>
                    </div>
                    <ul class="profile__item-chart">
                        <li v-for="(skill, i) in getSkills"
                            :key="`profile-chart-item-#${i}`"
                            :style="chartItemStyle(skill)"
                            class="profile__item-chart-item"
                            :class="`profile__item-chart-item--${i}`">
                            <span>{{ skill.percentage }}%</span>
                            {{ skill.name }}
                        </li>
                    </ul>
                </div>
            </li>
            <li class="profile__item profile__item--skill">
                <div>
                    <div class="profile__item-head">
                        <h3>FE Experience</h3>
                    </div>
                    <div class="profile__item-description">
                        I have 4 years of frontend experience with the following technologies:<br><br>
                        <div>
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
                    </div>
                </div>
            </li>
            <li class="profile__item profile__item--skill">
                <div>
                    <div class="profile__item-head">
                        <h3>BE Experience</h3>
                    </div>
                    <div class="profile__item-description">
                        I have 3 years of backend experience with the following technologies:<br><br>
                        <div>
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
                    </div>
                </div>
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
                const _skills = skills;
                _skills.sort((_a, _b) => _b.percentage - _a.percentage);

                return _skills;
            },
        },
        methods:  {
            chartItemStyle(item) {
                return {
                    width: `${item.percentage}%`,
                };
            },
        },
    };
</script>
