import MaterialFactory from './control/material/MaterialFactory';
import MaterialRegisterForm from './control/material/MaterialRegisterForm';
import MaterialEditForm from './control/material/MaterialEditForm';
import ListMaterials from './control/material/ListMaterials';
import UserEditForm from './control/user/UserEditForm';
import UserRegisterForm from './control/user/UserRegisterForm';
import UserLoginForm from './control/user/UserLoginForm';
import UserFactory from './control/user/UserFactory';
import UserGetDonator from './control/user/UserGetDonator';
import { mainColor } from './util/colors';
import MaterialsAggregate from './control/material/MaterialsAggregate';

let currentUserLogged = null;

export default class BusinessFacade {
  constructor() {
    this.materialFactory = new MaterialFactory(); // Singleton
    this.userFactory = new UserFactory(); // Singleton

    // Material
    this.materialRegisterForm = new MaterialRegisterForm();
    this.materialEditForm = new MaterialEditForm();
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
  
  getListAllMaterials(promisse) {
    this.listMaterials.getListAllMaterials((isSuccess, res) =>
      this.handlePromisseResponse(isSuccess, res, promisse));
  }

  getAllMyMaterials(donatorID, promisse) {
    this.listMaterials.getListAllMaterials((isSuccess, res) => {
      if (isSuccess) {
        const myItems = [];
        const materials = res.data.data;
        for (let index = 0; index < materials.length; index++) {
          const material = materials[index];
          if (material.donator === donatorID) {
            myItems.push(material);
          }
        }
        promisse(isSuccess, myItems);
      } else {
        this.handlePromisseResponse(isSuccess, res, promisse);
      }
    });
  }

  getDataMaterial(material, promisse) {
    this.listMaterials.getMaterial(material, 
      (isSuccess, res) => this.handlePromisseResponse(isSuccess, res, promisse));
  }

  getMaterialCategory(category, promisse) {
    this.listMaterials.getMaterialCategory(category,
      (isSuccess, res) => this.handlePromisseResponse(isSuccess, res, promisse));
  }

  getMaterialTitle(title, promisse) {
    this.listMaterials.getMaterialTitle(title,
      (isSuccess, res) => this.handlePromisseResponse(isSuccess, res, promisse));
  }

  // MaterialRegister Methods
  
  registerMaterial(material, promisse) {
    this.materialRegisterForm.registerMaterial(material, 
      (isSuccess, res) => this.handlePromisseResponse(isSuccess, res, promisse));
  }

  // MaterialEditForm Methods

  deleteMaterial(material, promisse) {
    this.materialEditForm.deleteMaterial(material,
      (isSuccess, res) => this.handlePromisseResponse(isSuccess, res, promisse));
  }

  editMaterial(material, promisse) {
    this.materialEditForm.editMaterial(material,
      (isSuccess, res) => this.handlePromisseResponse(isSuccess, res, promisse));
  }

  increasesMaterialRate(material, promisse) {
    this.materialEditForm.increasesMaterialRate(material,
      (isSuccess, res) => this.handlePromisseResponse(isSuccess, res, promisse));
  }

  getMaterialsAggregate(list) {
    return new MaterialsAggregate(list);
  }

  /***** User Methods *****/

  /* UserEditForm Methods */
  registerUser(user, promisse) {
    this.userRegisterForm.registerUser(user,
      (isSuccess, res) => this.handlePromisseResponse(isSuccess, res, promisse));
  }

  /* UserLoginForm Methods */ 

  loginUser(user, promisse) {
    this.userLoginForm.getUserLogin(user,
      (isSuccess, res) => this.handlePromisseResponse(isSuccess, res, promisse));
  }

  getCurrentUser(response) {
    if (!currentUserLogged) {
      // Usuario ainda nao foi criado
      this.userLoginForm.getCurrentUser(user => {
        // console.log('[Facade - getCurrentUser] user do business');
        // console.log(user);
        if (user) {
          currentUserLogged = user;
          response(user);
        } else {
          response(false);
        }
      });
    } else {
      // Usuario ja foi criado
      // console.log('[Facade - getCurrentUser] usuario ja salvo e recuperado');
      response(currentUserLogged);
    }
  }

  /* UserEditForm Methods */

  signOut() {
    this.userEditForm.deleteCurrentUser();
    currentUserLogged = null;
  }

  deleteCurrentUser(promisse) {
    this.getCurrentUser(user => {
      if (user) {
        // console.log(`[Facade - deleteCurrentUser] Deletando ${user.mail}`);
        this.userEditForm.deleteUser(user,
          (isSuccess, res) => {
            currentUserLogged = null;
            this.handlePromisseResponse(isSuccess, res, promisse);
          });
      }
    });
  }

  updateUser(user, promisse) {
    this.userEditForm.editUser(user,
      (isSuccess, res) => {
        if (!res.data.error) {
          currentUserLogged = user;
        }
        this.handlePromisseResponse(isSuccess, res, promisse);
      });
  }

  /* UserGetDonator */
  getDataDonator(donatorID, promisse) {
    this.userGetDonator.getDonator(donatorID, 
      (isSuccess, res) => this.handlePromisseResponse(isSuccess, res, promisse));
  }

  // util.colors Methods
  getMainColor() {
    return mainColor;
  }

  // helper
  handlePromisseResponse(isSuccess, res, promisse) {
    if (isSuccess) {
      // console.log('[Facade - handlePromisseResponse] Conectou ao DB!');
      const data = res.data;
      if (!data.error) {
        // console.log('[Facade - handlePromisseResponse] Query Sucesso!');
        promisse(true, data.data);
      } else {
        // console.log('[Facade - handlePromisseResponse] Query Falhou!');
        // console.log(res.data);
        promisse(false, res.data);
      }
    } else {
      // console.log('[Facade - handlePromisseResponse] Nao Conectou ao DB!');
      // console.log(res);
      promisse(false, res);
    }
  }
}
