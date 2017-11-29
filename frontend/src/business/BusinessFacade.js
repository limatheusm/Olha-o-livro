import MaterialFactory from './control/material/MaterialFactory';
import MaterialRegisterForm from './control/material/MaterialRegisterForm';
import ListMaterials from './control/material/ListMaterials';
import UserEditForm from './control/user/UserEditForm';
import UserRegisterForm from './control/user/UserRegisterForm';
import UserLoginForm from './control/user/UserLoginForm';
import UserFactory from './control/user/UserFactory';
import UserGetDonator from './control/user/UserGetDonator';
import { mainColor } from './util/colors';

let currentUserLogged = null;

export default class BusinessFacade {
  constructor() {
    this.materialFactory = new MaterialFactory(); // Singleton
    this.userFactory = new UserFactory(); // Singleton

    // Material
    this.materialRegisterForm = new MaterialRegisterForm();
    this.listMaterials = new ListMaterials();

    // User
    this.userRegisterForm = new UserRegisterForm();
    this.userEditForm = new UserEditForm();
    this.userLoginForm = new UserLoginForm();
    this.userGetDonator = new UserGetDonator();
  }

  // MaterialFactory methods
  getMaterial(type) {
    return this.materialFactory.getMaterial(type);
  }

  // UserFactory methods
  getUser(type) {
    return this.userFactory.getUser(type);
  }

  /***** Materials Methods *****/

  // ListMaterials Methods

  // MaterialRegister Methods
  // registerMaterial() {
  //   const material = this.materialFactory.getMaterial('material');
  //   this.materialRegisterForm.registerMaterial(material, (isSuccess, res) => {
  //     if (isSuccess) {
  //       console.log('Conectou ao DB!');
  //       console.log(res);
  //     } else {
  //       console.log('Nao Conectou ao DB!');
  //       console.log(res);
  //     }
  //   });
  // }

  /***** User Methods *****/

  /* UserEditForm Methods */
  registerUser(user, promisse) {
    this.userRegisterForm.registerUser(user,
      (isSuccess, res) => this.handleResponse(isSuccess, res, promisse));
  }

  /* UserLoginForm Methods */

  loginUser(user, promisse) {
    this.userLoginForm.getUserLogin(user,
      (isSuccess, res) => this.handleResponse(isSuccess, res, promisse));
  }

  getCurrentUser(response) {
    if (!currentUserLogged) {
      // Usuario ainda nao foi criado
      this.userLoginForm.getCurrentUser(user => {
        if (user) {
          currentUserLogged = user;
          response(user);
        }
      });
    } else {
      // Usuario ja foi criado
      response(currentUserLogged);
    }
  }

  /* UserEditForm Methods */

  deleteCurrentUser(promisse) {
    this.getCurrentUser(user => {
      if (user) {
        console.log(`Deletando ${user.mail}`);
        this.userEditForm.deleteUser(user,
          (isSuccess, res) => {
            currentUserLogged = null;
            this.handleResponse(isSuccess, res, promisse);
          });
      }
    });
  }

  updateUser(user, promisse) {
    this.userEditForm.editUser(user,
      (isSuccess, res) => this.handleResponse(isSuccess, res, promisse));
  }

  /* UserGetDonator */
  getDataDonator(donator, response) {
    this.userGetDonator.getDonator(donator, 
      (isSuccess, res) => this.handleResponse(isSuccess, res, response));
  }

  // util.colors Methods
  getMainColor() {
    return mainColor;
  }

  // helper
  handleResponse(isSuccess, res, promisse) {
    if (isSuccess) {
      console.log('Conectou ao DB!');
      const data = res.data;
      if (!data.error) {
        console.log('Query Sucesso!');
        promisse(true, data.data);
      } else {
        console.log('Query Falhou!');
        console.log(res.data);
        promisse(false, res.data);
      }
    } else {
      console.log('Nao Conectou ao DB!');
      console.log(res);
      promisse(false, res);
    }
  }
}
