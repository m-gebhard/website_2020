<template>
    <div class="theme-switch" v-scroll-spy-link="{selector: 'div'}">
        <div class="theme-switch__content"
             :class="{'theme-switch__content--checked' : value}">
            <input type="checkbox"
                   :checked="value"
                   @change="onInput">
            <font-awesome-icon icon="adjust"></font-awesome-icon>
        </div>
    </div>
</template>

<script>
    export default {
        name:    'theme-switch',
        props:   {
            value: {}
        },
        methods: {
            onInput(event) {
                const value = event.target.checked;
                this.$emit('input', value);
            },
        },
    };
</script>
