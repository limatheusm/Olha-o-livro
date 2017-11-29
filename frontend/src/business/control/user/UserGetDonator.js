import axios from 'axios';
import { URL_USER_GET_DONATOR } from '../../util/routes';

export default class UserGetDonator {
  getDonator(donator, response) {
    axios.get(`${URL_USER_GET_DONATOR}${donator._id}`, {
      headers: { token: 'oolivro' }
    })
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }
}
