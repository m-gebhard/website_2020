// 3rd
import Vue          from 'vue';
import App          from './App.vue';
import store        from './store';
import Scrollspy    from 'vue2-scrollspy';
import Lightbox     from 'vue-easy-lightbox';
import SocialShaing from 'vue-social-sharing';

// scss
import './assets/scss/app.scss';
import 'swiper/css/swiper.min.css';

// font awesome
import { library }         from '@fortawesome/fontawesome-svg-core';
import {
    faTimes, faEnvelope, faPlayCircle, faPaperPlane,
    faUser, faChartBar, faHeart,
    faCode, faCoffee, faCaretUp,
    faCompass, faAt, faTools,
    faThList, faCaretDown,
    faAdjust, faRocket,
}                          from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook, faTwitch, faWhatsapp,
    faCodepen, faGithub, faYoutube,
    faTwitter, faVuejs, faSass,
    faNodeJs, faLaravel, faHtml5,
    faPhp, faBootstrap,
}                          from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTimes, faEnvelope, faPlayCircle,
    faUser, faChartBar, faHeart, faAdjust,
    faCode, faCoffee, faCaretUp, faRocket,
    faCompass, faAt, faTools, faCaretDown,
    faThList, faFacebook, faTwitch, faTwitter,
    faWhatsapp, faCodepen, faGithub, faYoutube,
    faVuejs, faSass, faNodeJs, faLaravel, faHtml5, faPhp,
    faBootstrap, faPaperPlane);

// Components
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Lightbox);
Vue.use(Scrollspy);
Vue.use(SocialSharing);

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App)
}).$mount('#app');
