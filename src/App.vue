<template>
    <main id="app">
        <div class="app"
             v-scroll-spy="{offset: 100}"
             v-scroll-spy-active="{selector: '.page-section', class: 'page-section--active'}">

            <hero-area id="page-section-start"></hero-area>

            <page-section title="About">
                <profile></profile>
            </page-section>

            <page-section title="Projects" dark="true" edge="true">
                <project-view></project-view>
            </page-section>

            <page-section title="Contact">
                <contact-box></contact-box>
            </page-section>
        </div>

        <custom-footer></custom-footer>
    </main>
</template>

<script>
    import HeroArea     from './components/HeroArea';
    import PageSection  from './components/PageSection';
    import ProjectView  from './components/ProjectView';
    import ContactBox   from './components/ContactBox';
    import CustomFooter from './components/CustomFooter';
    import Profile      from './components/Profile';
    import ScrollTop    from './components/ScrollTop';

    export default {
        name:       'app',
        components: {
            ScrollTop,
            Profile,
            CustomFooter,
            ContactBox,
            ProjectView,
            PageSection,
            HeroArea,
        },
    };
</script>
