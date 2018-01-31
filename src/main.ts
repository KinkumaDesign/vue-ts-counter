import Vue from 'vue';
import AppView from "./components/app/AppView.vue"
import store from "./store/Store";

new Vue({
    el: '#app_container',
    render: h => h(AppView, {
        props: { store }
    }),
});
