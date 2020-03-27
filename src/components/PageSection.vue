<template>
    <div class="page-section" :class="classes">
        <div class="page-section__content">
            <h2 v-if="title" class="page-section__content-title">
                {{ title }}
            </h2>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:     'page-section',
        props:    {
            title: {
                required: true,
                type:     String,
            },
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
            }
        },
    };
</script>

