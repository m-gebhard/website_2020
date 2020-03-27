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
                <template slot="title">
                    <div class="project-filter">
                        <h2 class="page-section__content-title">
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

        <custom-footer></custom-footer>
    </main>
</template>

<script>
    import { mapActions } from 'vuex';
    import AVAILABLE_TAGS from './utils/availableTags';
    import HeroArea       from './components/HeroArea';
    import PageSection    from './components/PageSection';
    import ProjectView    from './components/ProjectView';
    import ContactBox     from './components/ContactBox';
    import CustomFooter   from './components/CustomFooter';
    import Profile        from './components/Profile';
    import ScrollTop      from './components/ScrollTop';

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
        data() {
            return {
                selectedFilter: 0,
            };
        },
        computed:   {
            getAvailableTags() {
                return AVAILABLE_TAGS;
            },
        },
        methods:    {
            ...mapActions(['setSelectedFilter']),

            updateFilter() {
                this.setSelectedFilter(this.selectedFilter);
            },
        }
    };
</script>
