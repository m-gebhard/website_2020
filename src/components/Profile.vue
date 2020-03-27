<template>
    <div class="profile">
        <ul class="profile__wrapper">
            <li class="profile__item">
                <font-awesome-icon icon="running"></font-awesome-icon>
                <h3>Who am I?</h3>
                <p class="profile__item-description">
                    My Name is Marius Gebhard.<br>
                    I am 22 years old and I live in Mannheim, Germany.
                    In my free time I'd like to code and do sports, graphics and UI design is also really interesting to
                    me.
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
                    I usually work with..
                </p>
                <ul class="profile__item-chart">
                    <li v-for="(skill, i) in skills"
                        :key="`profile-chart-item-#${i}`"
                        :style="chartItemStyle(skill)"
                        class="profile__item-chart-item">
                        {{ skill.name }}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:    'profile',
        data() {
            return {
                skills: [
                    {
                        name:       'PHP',
                        percentage: 75,
                        color:      '#0b88e8'
                    },
                    {
                        name:       'HTML',
                        percentage: 80,
                        color:      '#aa66ff'
                    }, {
                        name:       'CSS',
                        percentage: 90,
                        color:      '#aa66ff'
                    },
                    {
                        name:       'JS',
                        percentage: 90,
                        color:      '#0b88e8'
                    },
                    {
                        name:       'Dart',
                        percentage: 60,
                        color:      '#aa66ff'
                    },
                    {
                        name:       'C#',
                        percentage: 60,
                        color:      '#0b88e8'
                    }
                ]
            };
        },
        methods: {
            chartItemStyle(item) {
                return {
                    height:     `${item.percentage}%`,
                    background: item.color,
                };
            }
        },
    };
</script>
