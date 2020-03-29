<template>
    <section class="page-section hero-area">
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
                Backend
            </li>
            <li class="hero-area__anchor-list-item">
                Electronics
            </li>
        </ul>
        <div class="hero-area__info">
            <font-awesome-icon icon="tools"></font-awesome-icon>
            This website is under Construction
            <font-awesome-icon icon="tools"></font-awesome-icon>
        </div>
        <a @click="$parent.$scrollTo(1)" class="hero-area__jump-caret">
            <font-awesome-icon icon="caret-down"></font-awesome-icon>
        </a>
    </section>
</template>

<script>
    export default {
        name: 'hero-area',
    };
</script>
