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
      console.log('Error saving data');
    }
  }

  async getCurrentUser() {
    try {
      console.log('Recuperando usuario logado...');
      const response = await AsyncStorage.getItem(CURRENT_USER_KEY);
      if (response !== null) {
        // We have data!!
        console.log('Usuario logado recuperado!');
        const currentUser = await JSON.parse(response) || [];
        console.log(currentUser);
        return currentUser;
      }
    } catch (error) {
      // Error fetching data
      console.log('Error fetching data');
    }
    return undefined;
  }
}
