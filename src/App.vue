<template>
    <main id="app">
        <hero-area></hero-area>
        <page-section title="About Me">
            My Name is Marius Gebhard
        </page-section>
        <page-section dark="true" title="Projects">
            <project-view></project-view>
        </page-section>
        <page-section title="Contact">
            <contact-box></contact-box>
        </page-section>
    </main>
</template>

<script>
    import HeroArea    from './components/HeroArea';
    import PageSection from './components/PageSection';
    import ProjectView from './components/ProjectView';
    import ContactBox  from './components/ContactBox';

    export default {
        name:       'app',
        components: { ContactBox, ProjectView, PageSection, HeroArea },
    };
</script>
