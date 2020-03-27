<template>
    <div class="page-section" :class="classes">
        <div class="page-section__content">
            <h2 class="page-section__content-title">
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

