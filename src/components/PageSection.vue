<template>
    <div class="page-section" :id="getId" :class="classes" :style="style">
        <div class="page-section-overlay" v-if="background"></div>
        <div class="page-section__content">
            <template v-if="!$slots.title && title">
                <h2 class="page-section__content-title">
                    {{ title }}
                </h2>
                <p v-if="subtitle" class="page-section__content-subtitle">
                    {{ subtitle }}
                </p>
            </template>
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
            title:        {},
            subtitle:     {},
            background:   {},
            borderTop:    { type: Boolean },
            borderBottom: { type: Boolean },
            dark:         {
                default: false,
            },
            edge:         {
                default: false,
            },
        },
        computed: {
            classes() {
                return {
                    ['page-section--grey']:              this.dark,
                    ['page-section--edge']:              this.edge,
                    ['page-section--has-background']:    this.background,
                    ['page-section--has-border-top']:    this.borderTop,
                    ['page-section--has-border-bottom']: this.borderBottom,
                };
            },
            style() {
                if (!this.background) return;

                return {
                    backgroundImage: `url(${require('./../assets/images/' + this.background)})`,
                };
            },
            getId() {
                return `${this.title.replace('/\\d{4}\\/[A-Z]{1,2}\\d{2}/\n', '').toLowerCase()}`;
            },
        },
    };
</script>

