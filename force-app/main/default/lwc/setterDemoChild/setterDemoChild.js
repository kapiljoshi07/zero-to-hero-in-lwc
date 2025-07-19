import { LightningElement, api } from 'lwc';
export default class SetterDemoChild extends LightningElement {

    userData;
    @api
    get detail() {
        return this.userData;
    }
    set detail(data) {
        this.userData = {...data, age: data.age*2};
    }
}