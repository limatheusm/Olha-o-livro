import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { URL_USER_EDIT_FORM, URL_USER_DELETE } from '../../util/routes';

const CURRENT_USER_KEY = 'currentUser';

export default class UserEditForm {
  editUser(user, response) {
    axios.put(URL_USER_EDIT_FORM, user, {
      headers: { token: 'oolivro' }
    })
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }

  deleteUser(user, response) {
    console.log(user);
    axios.delete(`${URL_USER_DELETE}?id=${user._id}`, {
      headers: { token: 'oolivro' }
    })
      .then(res => {
        try {
          this.deleteCurrentUser();
          response(true, res);
        } catch (error) {
          console.log(error.message);
          response(false, res);
        }
      })
      .catch(err => response(false, err));
  }

  async deleteCurrentUser() {
    try {
      await AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify({}));
    } catch (error) {
      // Error saving data
      throw new Error('Error saving data');
    }
  }
}
