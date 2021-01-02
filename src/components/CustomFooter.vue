<template>
    <footer class="custom-footer">
        <div class="custom-footer__content">
            <div class="custom-footer__copyright">
                <span class="custom-footer__copyright-heart">
                    Made with
                    <font-awesome-icon icon="heart"></font-awesome-icon>
                    and
                    <font-awesome-icon icon="coffee"></font-awesome-icon>.
                </span>
                <span>&copy 2021 - Marius Gebhard</span>
            </div>
            <ul class="custom-footer__anchor-list">
                <li class="custom-footer__anchor-list-item">
                    <a href="https://codepen.io/marius12375" target="_blank">
                        <font-awesome-icon :icon="['fab', 'codepen']"></font-awesome-icon>
                    </a>
                </li>
                <li class="custom-footer__anchor-list-item">
                    <a href="https://github.com/m-gebhard" target="_blank">
                        <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
                    </a>
                </li>
                <li class="custom-footer__anchor-list-item">
                    <a href="https://www.youtube.com/user/SensitionBeatZ" target="_blank">
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
