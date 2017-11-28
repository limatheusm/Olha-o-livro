import MaterialFactory from './control/material/MaterialFactory';
import UserFactory from './control/user/UserFactory';
import { mainColor } from './util/colors';

export default class BusinessFacade {
  constructor() {
    this.materialFactory = new MaterialFactory(); //Singleton
    this.userFactory = new UserFactory(); //Singleton
  }

  // MaterialFactory methods
  getMaterial(type) {
    return this.materialFactory.getMaterial(type);
  }

  // UserFactory methods
  getUser(type) {
    return this.userFactory.getUser(type);
  }

  // util.colors Methods
  getMainColor() {
    return mainColor;
  }
}
