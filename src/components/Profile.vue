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
                    Sports? I like to go to the gym.
                    Graphics and UI design is also really interesting to me.
                </p>
            </li>
            <li class="profile__item">
                <font-awesome-icon icon="code"></font-awesome-icon>
                <h3>What do I do?</h3>
                <p class="profile__item-description">
                    Write code. A lot of code<br>
                    My main focus is frontend development, I love to build fancy websites and share my designs and ideas
                    with customers.<br>
                    But whats worth a fancy frontend without a backend?
                    Don't know? Don't worry, I got you covered!
                </p>
            </li>
            <li class="profile__item">
                <font-awesome-icon icon="chart-bar"></font-awesome-icon>
                <h3>What can I offer?</h3>
                <p class="profile__item-description">
                    Years of experience, passion and a wide variety of programming skills in different languages:
                </p>
                <ul class="profile__item-chart">
                    <li v-for="(skill, i) in getSkills"
                        :key="`profile-chart-item-#${i}`"
                        :style="chartItemStyle(skill)"
                        v-html="skill.name"
                        class="profile__item-chart-item">
                    </li>
                </ul>
            </li>
            <!--<li class="profile__item profile__item&#45;&#45;skill">-->

                <!--<p class="profile__item-description">-->

                <!--</p>-->
            <!--</li>-->
            <!--<li class="profile__item profile__item&#45;&#45;skill">-->

                <!--<p class="profile__item-description">-->

                <!--</p>-->
            <!--</li>-->
            <!--<li class="profile__item profile__item&#45;&#45;skill">-->

                <!--<p class="profile__item-description">-->

                <!--</p>-->
            <!--</li>-->
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
                    height:     `${item.percentage}%`,
                    background: item.color,
                };
            }
        },
    };
</script>
