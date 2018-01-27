export default class CountData {
    state = {
        count: 0,
        tick: 10
    };

    setCount(value:number){
        this.state.count = value;
    }
}
