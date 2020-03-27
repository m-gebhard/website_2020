<template>
    <div class="page-section" :class="classes">
        <h2 class="page-section__title">
            {{ title }}
        </h2>
        <div class="page-section__content">
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
            }
        },
        computed: {
            classes() {
                return {
                    ['page-section--grey']: this.dark,
                };
            }
        },
    };
</script>

