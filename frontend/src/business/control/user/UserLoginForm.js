import axios from 'axios';
import { URL_USER_LOGIN_FORM } from '../../util/routes';

export default class UserLoginForm {
  getUserLogin(user, response) {
    axios.get(`${URL_USER_LOGIN_FORM}?$mail=${user.mail}&password=${user.password}`)
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }
}
