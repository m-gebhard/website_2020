<template>
    <div v-scroll-spy-link="{selector: 'div'}">
        <div key="scroll-top"
             :class="classes"
             class="scroll-top">

            <font-awesome-icon icon="caret-up"
                               class="scroll-top__icon">
            </font-awesome-icon>
        </div>
    </div>
</template>

<script>
    export default {
        name:     'scroll-top',
        props:    {
            inline: {
                default: false,
            }
        },
        computed: {
            classes() {
                return {
                    ['scroll-top--inline']: this.inline,
                };
            },
        },
    };
</script>
