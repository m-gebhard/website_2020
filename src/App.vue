<template>
    <main id="app">
        <div class="section-container"
             :class="{'transition-body' : isInTransition}"
             v-scroll-spy
             v-scroll-spy-active="{selector: '.page-section', class: 'page-section--active'}">

            <hero-area id="page-section-start"></hero-area>

            <page-section title="About">
                <profile></profile>
            </page-section>

            <page-section title="Projects" dark="true" edge="true">
                <template slot="title">
                    <div class="project-filter">
                        <h2 class="page-section__content-title page-section__content-title--no-margin">
                            Projects
                        </h2>
                        <div class="project-filter__wrapper">
                            <font-awesome-icon icon="th-list"></font-awesome-icon>
                            <select v-model="selectedFilter"
                                    class="project-filter__select"
                                    id="filter"
                                    @change="updateFilter">
                                <option v-for="(tag, i) in getAvailableTags"
                                        :value="i">
                                    {{ tag }}
                                </option>
                            </select>
                        </div>
                    </div>
                </template>
                <project-view></project-view>
            </page-section>

            <page-section title="Contact">
                <contact-box></contact-box>
            </page-section>
        </div>

        <project-overlay></project-overlay>
        <theme-switch v-model="isDarkmode" @input="updateTheme"></theme-switch>

        <custom-footer></custom-footer>
    </main>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import THEMES                     from './utils/themes';
    import AVAILABLE_TAGS             from './utils/availableTags';
    import HeroArea                   from './components/HeroArea';
    import PageSection                from './components/PageSection';
    import ProjectView                from './components/ProjectView';
    import ContactBox                 from './components/ContactBox';
    import CustomFooter               from './components/CustomFooter';
    import Profile                    from './components/Profile';
    import ScrollTop                  from './components/ScrollTop';
    import ProjectOverlay             from './components/ProjectOverlay';
    import ThemeSwitch                from './components/ThemeSwitch';

    export default {
        name:       'app',
        components: {
            ThemeSwitch,
            ProjectOverlay,
            ScrollTop,
            Profile,
            CustomFooter,
            ContactBox,
            ProjectView,
            PageSection,
            HeroArea,
        },
        data() {
            return {
                isDarkmode:     false,
                isInTransition: false,
                selectedFilter: 0,
            };
        },
        computed:   {
            ...mapGetters(['isAnyModalOpened']),

            getAvailableTags() {
                return AVAILABLE_TAGS;
            },
        },
        methods:    {
            ...mapActions(['setSelectedFilter']),

            updateFilter() {
                this.setSelectedFilter(this.selectedFilter);
            },
            updateTheme() {
                const selectedTheme = THEMES[this.isDarkmode ? 1 : 0];
                const html          = document.documentElement;

                if (selectedTheme) {
                    Object.keys(selectedTheme).forEach((property) => {
                        if (property === 'name') return;
                        html.style.setProperty(property, selectedTheme[property]);
                    });
                    this.isInTransition = true;

                    setTimeout(() => {
                        this.isInTransition = false;
                    }, 5000);
                }
            },
        },
        watch:      {
            isAnyModalOpened(state) {
                if (state) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = 'auto';
                }
            },
        },
    };
</script>
