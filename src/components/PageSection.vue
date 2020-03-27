<template>
    <div class="page-section" :id="getId" :class="classes">
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
            title: {},
            dark:  {
                default: false,
            },
            edge:  {
                default: false,
            }
        },
        computed: {
            classes() {
                return {
                    ['page-section--grey']: this.dark,
                    ['page-section--edge']: this.edge,
                };
            },
            getId() {
                return `page-section-${this.title.replace('/\\d{4}\\/[A-Z]{1,2}\\d{2}/\n', '').toLowerCase()}`;
            },
        },
    };
</script>

