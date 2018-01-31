export default class Count {
    state = {
        count: 0,
        tick: 10
    };

    get count():number { return this.state.count }
    set count(count:number){ this.state.count = count }

    get tick():number { return this.state.tick }
    set tick(tick:number){ this.state.tick = tick }

}
