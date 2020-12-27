<template>
    <main id="app" ref="app">
        <div class="section-container"
             :class="{'transition-body' : isInTransition}"
             v-scroll-spy
             v-scroll-spy-active="{selector: '.page-section', class: 'page-section--active'}">

            <hero-area id="page-section-start">
                <theme-switch :value="isDarkMode" @input="updateTheme"></theme-switch>
            </hero-area>

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
                            <div class="project-filter__select-wrapper">
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
                    </div>
                </template>
                <project-view></project-view>
            </page-section>

            <page-section title="Contact" background="background_xs.jpg" borderTop>
                <contact-box></contact-box>
            </page-section>
        </div>

        <project-overlay></project-overlay>

        <custom-footer></custom-footer>
    </main>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import { projects }               from './utils/projects';
    import THEMES                     from './utils/themes';
    import { AVAILABLE_TAGS }         from './utils/projectMeta';
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
                isInTransition: false,
                selectedFilter: 0,
            };
        },
        created() {
            this.updateTheme(window.localStorage.getItem('darkmode') === 'true');
        },
        mounted() {
            const hash = window.location.hash;

            if (hash) {
                this.openProjectBySlug(hash.split('#/')[1]);
            }
        },
        computed:   {
            ...mapGetters(['isAnyModalOpened', 'isDarkMode']),

            getAvailableTags() {
                return AVAILABLE_TAGS;
            },
        },
        methods:    {
            ...mapActions(['setSelectedFilter', 'setDarkMode', 'setModalOpenState']),

            updateFilter() {
                this.setSelectedFilter(this.selectedFilter);
            },
            updateTheme(darkMode) {
                this.$nextTick(() => {
                    const selectedTheme = THEMES[darkMode ? 1 : 0];
                    const html          = document.documentElement;

                    if (darkMode) {
                        this.$refs['app'].classList.add('dark');
                    } else {
                        this.$refs['app'].classList.remove('dark');
                    }

                    if (selectedTheme) {
                        Object.keys(selectedTheme).forEach((property) => {
                            if (property === 'name') return;
                            html.style.setProperty(property, selectedTheme[property]);
                        });
                        this.isInTransition = true;

                        this.setDarkMode(darkMode);
                        window.localStorage.setItem('darkmode', darkMode);

                        setTimeout(() => {
                            this.isInTransition = false;
                        }, 500);
                    }
                });
            },
            openProjectBySlug(hash) {
                const project = projects.find((_project) => _project.slug === hash);

                if (project) {
                    this.setModalOpenState({
                        key:       'project-modal',
                        openState: true,
                        payload:   project,
                    });
                }
            }
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
