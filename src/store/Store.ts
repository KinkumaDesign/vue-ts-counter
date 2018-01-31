import Count from "./Count";

export class Store {
    count:Count = new Count();

    constructor(){
    }
}

const store = new Store();
export default store;
