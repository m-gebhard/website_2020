<template>
    <div v-if="project" class="project-overlay" :class="classes">
        <div class="project-overlay__background"></div>
        <div class="project-overlay__content">
            <div class="project-overlay__content-scroll-container" ref="scrollContainer">
                <div class="project-overlay__content-close"
                     @click.prevent="close">
                    <font-awesome-icon icon="times"></font-awesome-icon>
                </div>

                <h2 class="project-overlay__content-title">
                    {{ project.title }}
                </h2>
                <p class="project-overlay__content-description" v-html="project.description"></p>

                <social-sharing :url="getProjectUrl"
                                title="Check out this project!"
                                :description="getFormattedProjectDescription"
                                :quote="project.title"
                                hashtags="developer,web,javascript,framework,fancy,vuejs,css,html"
                                inline-template>

                    <div class="project-overlay__content-share-buttons">
                        <span class="project-overlay__content-share-buttons-title">Share this Project</span>

                        <div class="project-overlay__content-share-buttons-list">
                            <network network="email">
                                <font-awesome-icon icon="envelope"></font-awesome-icon>
                            </network>
                            <network network="facebook">
                                <font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon>
                            </network>
                            <network network="twitter">
                                <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
                            </network>
                            <network network="whatsapp">
                                <font-awesome-icon :icon="['fab', 'whatsapp']"></font-awesome-icon>
                            </network>
                        </div>
                    </div>
                </social-sharing>

                <div v-if="getImages.length > 0 || project.video"
                     class="project-overlay__content-slider-container"
                     :class="{'project-overlay__content-slider-container--disabled' : !isSwiperEnabled}">

                    <div class="swiper-wrapper">
                        <a v-if="project.video"
                           :style="getImageStyle(project.videoTeaser)"
                           :href="project.video"
                           target="_blank"
                           class="swiper-slide swiper-slide--video">
                            <font-awesome-icon icon="play-circle"></font-awesome-icon>
                            <span>Watch on YouTube</span>
                        </a>

                        <div v-for="(image, i) in getImages"
                             :key="`project-overlay-image-#${i}`"
                             :style="getImageStyle(image)"
                             class="swiper-slide"
                             @click.prevent="showLightbox(i)">
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>

                <div class="project-overlay__content-description-link project-overlay__content-close-bottom"
                     @click.prevent="close">
                    Go Back
                    <i>
                        <font-awesome-icon icon="caret-down"></font-awesome-icon>
                    </i>
                </div>

                <div class="project-overlay__hidden-block"></div>
            </div>
        </div>
        <vue-easy-lightbox :visible="lightboxVisible"
                           :imgs="getImagesWithPaths"
                           :index="lightboxIndex"
                           moveDisabled
                           @hide="lightboxVisible = false">
        </vue-easy-lightbox>
    </div>
</template>

<script>
    import Swiper                     from 'swiper';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name:     'project-overlay',
        data() {
            return {
                project:         null,
                swiper:          null,
                lightboxVisible: false,
                lightboxIndex:   0,
            };
        },
        computed: {
            ...mapGetters(['getModalOpenState', 'getModal']),

            classes() {
                return {
                    ['project-overlay--open']: this.isOpen,
                };
            },
            isOpen() {
                return this.getModalOpenState('project-modal');
            },
            isSwiperEnabled() {
                // Disable swiping if there are not enough images
                if (!this.swiper) return false;
                const itemCount = this.project.images.length + (this.project.video ? 1 : 0);

                return itemCount > this.getBreakpoints[this.swiper.currentBreakpoint].slidesPerView;
            },
            getImages() {
                return this.project.images;
            },
            getImagesWithPaths() {
                return this.getImages.map((_image) => {
                    return require(`./../assets/images/projects/${_image}`);
                });
            },
            getFormattedProjectDescription() {
                // Strip html tags and cut text after last sentence (.) within 500 words
                const div     = document.createElement('div');
                div.innerHTML = this.project.description;

                const text            = div.textContent || div.innerText || '';
                const thirdPointIndex = text.substr(0, 500).lastIndexOf('.');

                return `${text.substr(0, thirdPointIndex)}.. Read more at:`;
            },
            getProjectUrl() {
                return `${window.location.origin}/#/${this.project.slug}`;
            },
            getBreakpoints() {
                return this.swiper
                    ? this.swiper.passedParams.breakpoints
                    : [];
            },
        },
        methods:  {
            ...mapActions(['setModalOpenState']),

            init() {
                this.$nextTick(() => {
                    this.$refs.scrollContainer.scrollTo(0, 0);
                });
                this.project = this.getModal('project-modal').payload;
                document.addEventListener('keydown', this.handleKeyDown);
            },
            close() {
                this.setModalOpenState({
                    key:       'project-modal',
                    openState: false,
                });
            },
            handleKeyDown(event) {
                if (event.which === 27) {
                    this.close();
                }
            },
            getImageStyle(image) {
                const _image = require(`./../assets/images/projects/${image}`);
                return `background-image: url('${_image}')`;
            },
            showLightbox(index) {
                this.lightboxVisible = true;
                this.lightboxIndex   = index;
            },
        },
        watch:    {
            isOpen(open) {
                if (open) {
                    this.init();

                    if (this.swiper) {
                        this.swiper.destroy();
                    }

                    this.$nextTick(() => {
                        this.swiper = new Swiper('.project-overlay__content-slider-container', {
                            spaceBetween: 10,
                            breakpoints:  {
                                0:    {
                                    slidesPerView: 2,
                                },
                                421:  {
                                    slidesPerView: 3,
                                },
                                1301: {
                                    slidesPerView: 4,
                                }
                            },
                            pagination:   {
                                clickable: true,
                                el:        '.swiper-pagination',
                            },
                        });
                    });
                } else {
                    setTimeout(() => {
                        this.swiper.destroy(true, false);
                        this.swiper = null;
                        document.removeEventListener('keydown', this.handleKeyDown);
                    }, 500);
                }
            },
        },
    };
</script>
