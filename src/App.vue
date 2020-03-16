<template>
    <div id="app">
        <hero-bubbles>
            hello bubbles
        </hero-bubbles>
    </div>
</template>

<script>
    import HeroBubbles from './components/layout/HeroBubbles';
    export default {
        name:       'app',
        components: { HeroBubbles }
    };
</script>
