<template>
    <div v-if="isOpen" class="project-overlay">
        <div class="project-overlay__content">
            <div class="project-overlay__content-scroll-container">
                <div class="project-overlay__content-close"
                     @click.prevent="close">
                    <font-awesome-icon icon="times"></font-awesome-icon>
                </div>

                <h2 class="project-overlay__content-title">
                    {{ project.title }}
                </h2>
                <p class="project-overlay__content-description">
                    {{ project.description }}
                </p>

                <social-sharing url="https://mgebhard.tk"
                                title="Check out this project!"
                                :description="project.description"
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
                            <network network="reddit">
                                <font-awesome-icon :icon="['fab', 'reddit']"></font-awesome-icon>
                            </network>
                            <network network="telegram">
                                <font-awesome-icon :icon="['fab', 'telegram']"></font-awesome-icon>
                            </network>
                            <network network="whatsapp">
                                <font-awesome-icon :icon="['fab', 'whatsapp']"></font-awesome-icon>
                            </network>
                        </div>
                    </div>
                </social-sharing>

                <div v-if="getImages.length > 0"
                     class="project-overlay__content-slider-container">
                    <div class="swiper-wrapper">
                        <div v-for="(image, i) in getImages"
                             :key="`project-overlay-image-#${i}`"
                             :style="{backgroundImage: `url(${image})`}"
                             class="swiper-slide">
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper                     from 'swiper';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name:     'project-overlay',
        data() {
            return {
                project: null,
                swiper:  null,
            };
        },
        computed: {
            ...mapGetters(['getModalOpenState', 'getModal']),

            modal() {
                return this.getModal('project-modal');
            },
            isOpen() {
                return this.getModalOpenState('project-modal');
            },
            getImages() {
                return this.project.images;
            }
        },
        methods:  {
            ...mapActions(['setModalOpenState']),

            init() {
                this.project = this.modal.payload;
            },
            close() {
                this.setModalOpenState({
                    key:       'project-modal',
                    openState: false,
                });
            },
        },
        watch:    {
            isOpen(open) {
                if (open) {
                    this.init();

                    this.$nextTick(() => {
                        this.swiper = new Swiper('.project-overlay__content-slider-container', {
                            preloadImages:            true,
                            centerInsufficientSlides: true,
                            slidesPerView:            1,
                            spaceBetween:             10,
                            breakpoints:              {
                                701:  {
                                    slidesPerView: 2,
                                },
                                1301: {
                                    slidesPerView: 3,
                                }
                            },
                            pagination:               {
                                el: '.swiper-pagination',
                            },
                        });
                    });
                }
            },
        },
    };
</script>
