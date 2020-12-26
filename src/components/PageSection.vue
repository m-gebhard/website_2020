<template>
    <div class="page-section" :id="getId" :class="classes" :style="style">
        <div class="page-section-overlay" v-if="background"></div>
        <div class="page-section__content">
            <h2 v-if="!$slots.title && title" class="page-section__content-title">
                {{ title }}
            </h2>
            <template v-else-if="$slots.title">
                <slot name="title"></slot>
            </template>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:     'page-section',
        props:    {
            title:      {},
            background: {},
            dark:       {
                default: false,
            },
            edge:       {
                default: false,
            },
        },
        computed: {
            classes() {
                return {
                    ['page-section--grey']: this.dark,
                    ['page-section--edge']: this.edge,
                };
            },
            style() {
                return {
                    backgroundImage: `url(${this.background})`,
                };
            },
            getId() {
                return `${this.title.replace('/\\d{4}\\/[A-Z]{1,2}\\d{2}/\n', '').toLowerCase()}`;
            },
        },
    };
</script>

