import Vue from 'vue';
import CounterView from "../counter/CounterView.vue";
import {Store} from "../../store/Store";

const App = Vue.extend({
    props:{
        store:{
            type:Store
        }
    },
    components:{
        CounterView
    },
    data(){
        return {

        }
    },
    methods:{
    }
});
export default App;
