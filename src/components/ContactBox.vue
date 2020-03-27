<template>
    <div class="contact-box">
        <form class="contact-box__form" @submit.prevent="onSubmit">
            <div class="contact-box__row">
                <div class="contact-box__input">
                    <label for="name">Name</label>
                    <input v-html="inputName"
                           id="name"
                           type="text">
                </div>
                <div class="contact-box__input">
                    <label for="name">E-Mail</label>
                    <input v-html="inputEmail"
                           id="email"
                           type="email">
                </div>
            </div>
            <div class="contact-box__row">
                <div class="contact-box__input">
                    <label for="message">Message</label>
                    <textarea id="message"></textarea>
                </div>
            </div>
            <button class="contact-box__form-submit" type="submit">
                Submit
            </button>
        </form>
        <div class="contact-box__details">
            <h3>Say Hello!</h3>
            <div class="contact-box__details-item">
                <span>Mannheim, <span>Germany</span></span>
                <font-awesome-icon icon="compass"></font-awesome-icon>
            </div>
            <div class="contact-box__details-item">
                <a href="mailto:">marius.wspi@gmail.com</a>
                <font-awesome-icon icon="at"></font-awesome-icon>
            </div>
        </div>
        <div class="contact-box__scroll-top">
            <scroll-top></scroll-top>
        </div>
    </div>
</template>

<script>
    import ScrollTop from './ScrollTop';

    export default {
        name:       'contact-box',
        components: { ScrollTop },
        data() {
            return {
                inputName:    '',
                inputEmail:   '',
                inputMessage: '',
            };
        },
        methods:    {
            onSubmit() {
            }
        },
    };
</script>
