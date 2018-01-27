import Vue from 'vue';
import CountData from "../../store/CountData";

const Counter = Vue.extend({
    props:{
        countData:{
            type:CountData
        }
    },
    data(){
        return {
            state: this.countData.state
        }
    },
    methods:{
        onMinusButtonClick(){
            const newCount = this.state.count - this.state.tick;
            this.countData.setCount(newCount);
        },
        onPlusButtonClick(){
            const newCount = this.state.count + this.state.tick;
            this.countData.setCount(newCount);
        }
    }
});
export default Counter;
