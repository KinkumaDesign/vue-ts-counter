import Vue from 'vue';
import Count from "../../store/Count";

const CounterView = Vue.extend({
    props:{
        count:{
            type:Count
        }
    },
    data(){
        return {
            state: this.count.state
        }
    },
    methods:{
        onMinusButtonClick(){
            const newCount = this.count.count - this.count.tick;
            this.count.count = newCount;
        },
        onPlusButtonClick(){
            const newCount = this.count.count + this.count.tick;
            this.count.count = newCount;
        }
    }
});
export default CounterView;
