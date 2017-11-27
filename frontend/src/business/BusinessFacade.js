import MaterialFactory from './control/material/MaterialFactory';
import { mainColor } from './util/colors';

export default class BusinessFacade {

    constructor() {
        this._materialFactory = new MaterialFactory(); //Singleton
    }

    // MaterialFactory methods
    getMaterial(type) {
        return this._materialFactory.getMaterial(type);
    }
    
    // util.colors Methods
    getMainColor() {
        return mainColor;
    }

}