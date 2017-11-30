import axios from 'axios';
import { URL_USER_GET_DONATOR } from '../../util/routes';

export default class UserGetDonator {
  getDonator(donatorID, response) {
    axios.get(`${URL_USER_GET_DONATOR}${donatorID}`, {
      headers: { token: 'oolivro' }
    })
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }
}
