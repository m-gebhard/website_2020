// 3rd
import Vue       from 'vue';
import App       from './App.vue';
import store     from './store';
import Scrollspy from 'vue2-scrollspy';

// scss
import './assets/scss/app.scss';
import 'swiper/css/swiper.min.css';

// font awesome
import { library }         from '@fortawesome/fontawesome-svg-core';
import { fas }             from '@fortawesome/free-solid-svg-icons';
import { fab }             from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas, fab);

// Components
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Scrollspy);

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App)
}).$mount('#app');
