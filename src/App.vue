<template>
    <div id="app">
        <hero-area></hero-area>
    </div>
</template>

<script>
    import HeroArea from './components/HeroArea';
    export default {
        name: 'app',
        components: { HeroArea },
    };
</script>
