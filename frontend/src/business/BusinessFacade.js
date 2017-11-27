import MaterialFactory from './control/material/MaterialFactory';
import UserFactory from './control/user/UserFactory';
import { mainColor } from './util/colors';

export default class BusinessFacade {

    constructor() {
        this._materialFactory = new MaterialFactory(); //Singleton
        this._userFactory = new UserFactory(); //Singleton
    }

    // MaterialFactory methods
    getMaterial(type) {
        return this._materialFactory.getMaterial(type);
    }

    // UserFactory methods
    getUser(type) {
        return this._userFactory.getUser(type);
    }
    
    // util.colors Methods
    getMainColor() {
        return mainColor;
    }

}