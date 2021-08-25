require('./bootstrap');

import Vue from 'vue';
import App from './components/App';

Vue.component('app', require('~/components/App').default);

const app = new Vue({
    el:'#app',
    App
});
