import axios from 'axios';
import {
  AsyncStorage
} from 'react-native';

import { URL_USER_LOGIN_FORM } from '../../util/routes';

const CURRENT_USER_KEY = 'currentUser';

export default class UserLoginForm {
  getUserLogin(user, response) {
    axios.get(`${URL_USER_LOGIN_FORM}?mail=${user.mail}&password=${user.password}`, {
      headers: { token: 'oolivro' }
    })
      .then(res => {
        const currentUser = res.data.data[0];
        this.saveCurrentUser(currentUser);
        response(true, res);
      })
      .catch(err => response(false, err));
  }

  async saveCurrentUser(currentUser) {
    try {
      await AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
    } catch (error) {
      // Error saving data
      throw new Error('Error saving data');
    }
  }

  async getCurrentUser(promisse) {
    try {
      const response = await AsyncStorage.getItem(CURRENT_USER_KEY);
      if (response !== null) {
        // We have data!!
        const currentUser = await JSON.parse(response) || [];
        if (!this.objIsEmpty(currentUser)) {
          promisse(currentUser);
        } else {
          promisse(null);
        }
      } else {
        promisse(null);
      }
    } catch (error) {
      // Error fetching data
      promisse(null);
      throw new Error('Error fetching data');
    }
    return undefined;
  }

  objIsEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }
}
