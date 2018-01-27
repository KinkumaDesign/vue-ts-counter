import CountData from "./CountData";

export class Store {
    countData:CountData = new CountData();

    constructor(){
    }
}

const store = new Store();
export default store;
