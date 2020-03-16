<template>
    <div class="hero-bubbles">
        <ul class="hero-bubbles__bubbles-container">
            <li v-for="i in 8"
                :key="`hero-bubble-#${i}`"
                :style="style(i)">
            </li>
        </ul>
        <div class="hero-bubbles__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:    'hero-bubbles',
        props:   {
            color: {
                default: '#0b88e8',
            },
        },
        methods: {
            style(index) {
                return {
                    backgroundColor: this.color,
                    opacity:         1 - (index / 10),
                };
            }
        },
    };
</script>
