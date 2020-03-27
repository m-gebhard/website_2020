<template>
    <footer class="custom-footer">
        <div class="custom-footer__content">
            <span class="custom-footer__copyright">
                &copy 2020 - Marius Gebhard
            </span>
            <ul class="custom-footer__anchor-list">
                <li class="custom-footer__anchor-list-item">
                    <a href="#">
                        <font-awesome-icon :icon="['fab', 'codepen']"></font-awesome-icon>
                    </a>
                </li>
                <li class="custom-footer__anchor-list-item">
                    <a href="#">
                        <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
                    </a>
                </li>
                <li class="custom-footer__anchor-list-item">
                    <a href="#">
                        <font-awesome-icon :icon="['fab', 'youtube']"></font-awesome-icon>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'custom-footer',
    };
</script>
