import axios from 'axios';

import { URL_USER_REGISTER_FORM } from '../../util/routes';
import UserLoginForm from './UserLoginForm';

export default class UserRegisterForm {
  registerUser(user, response) {
    axios.post(URL_USER_REGISTER_FORM, user, {
      headers: { token: 'oolivro' }
    })
      .then(res => {
        const userRegistered = { ...user, _id: res.data.id };
        try {
          new UserLoginForm().saveCurrentUser(userRegistered);
          response(true, res);
        } catch (error) {
          console.log(error.message);
          response(false, res);
        }
      })
      .catch(res => response(false, res));
  }
}
