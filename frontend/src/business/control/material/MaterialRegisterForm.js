import axios from 'axios';
import { URL_MATERIAL_REGISTER_FORM } from '../../util/routes';

export default class MaterialRegisterForm {
  registerMaterial(material, response) {
    axios.post(URL_MATERIAL_REGISTER_FORM, material, {
      headers: { token: 'oolivro' }
    })
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }
}
