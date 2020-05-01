<template>
    <section class="page-section hero-area">
        <div class="hero-area-overlay"></div>
        <div class="hero-area-content">
            <font-awesome-icon class="hero-area__icon"
                               icon="code">
            </font-awesome-icon>
            <div class="hero-area__divider"></div>
            <h1 class="hero-area__title">
                marius gebhard
            </h1>
            <ul class="hero-area__anchor-list">
                <li class="hero-area__anchor-list-item">
                    Frontend
                </li>
                <li class="hero-area__anchor-list-item">
                    Apps
                </li>
                <li class="hero-area__anchor-list-item">
                    Backend
                </li>
            </ul>
            <a @click="$parent.$scrollTo(1)" class="hero-area__jump-caret">
                <font-awesome-icon icon="caret-down"></font-awesome-icon>
            </a>
            <slot></slot>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'hero-area',
    };
</script>
