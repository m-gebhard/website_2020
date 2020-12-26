<template>
    <div class="theme-switch"
         :class="{'theme-switch--transitioning': transitioning}"
         v-scroll-spy-link="{selector: 'div'}">
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
        data() {
            return {
                transitioning: false,
            };
        },
        methods: {
            onInput(event) {
                const value = event.target.checked;
                this.$emit('input', value);

                this.transitioning = true;
                setTimeout(() => {
                    this.transitioning = false;
                }, 500);
            },
        },
    };
</script>
