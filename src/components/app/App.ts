import Vue from 'vue';
import Counter from "../counter/Counter.vue";
import {Store} from "../../store/Store";

const App = Vue.extend({
    props:{
        store:{
            type:Store
        }
    },
    components:{
        Counter
    },
    data(){
        return {

        }
    }
});
export default App;
