import Vue from 'vue';

const Counter = Vue.extend({
    data(){
        return {
            count: 0,
            tick: 10
        }
    },
    methods:{
        onMinusButtonClick(){
            this.count = this.count - this.tick;
        },
        onPlusButtonClick(){
            this.count = this.count + this.tick;
        }
    }
});
export default Counter;
