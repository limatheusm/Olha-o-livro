import axios from 'axios';
import { URL_MATERIAL_REGISTER_FORM } from '../../util/routes';

export default class MaterialRegisterForm {
  // falta definir rota
  registerMaterial(material, response) {
    axios.post(URL_MATERIAL_REGISTER_FORM, material)
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }
}
