<template>
    <main id="app">
        <hero-area></hero-area>

        <page-section title="About Me">
            My Name is Marius Gebhard
        </page-section>

        <page-section title="Projects" dark="true" edge="true">
            <project-view></project-view>
        </page-section>

        <page-section title="Contact">
            <contact-box></contact-box>
        </page-section>

        <custom-footer></custom-footer>
    </main>
</template>

<script>
    import HeroArea     from './components/HeroArea';
    import PageSection  from './components/PageSection';
    import ProjectView  from './components/ProjectView';
    import ContactBox   from './components/ContactBox';
    import CustomFooter from './components/CustomFooter';

    export default {
        name:       'app',
        components: {
            CustomFooter,
            ContactBox,
            ProjectView,
            PageSection,
            HeroArea,
        },
    };
</script>
