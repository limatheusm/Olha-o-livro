import axios from 'axios';
import {
  URL_EDIT_MATERIAL,
  URL_DELETE_MATERIAL,
  URL_MATERIAL_RATE
} from '../../util/routes';

export default class MaterialEditForm {
  editMaterial(material, response) {
    axios.put(URL_EDIT_MATERIAL, material, {
      headers: { token: 'oolivro' }
    })
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }

  deleteMaterial(material, response) {
    axios.delete(`${URL_DELETE_MATERIAL}?id=${material._id}`, {
      headers: { token: 'oolivro' }
    })
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }

  increasesMaterialRate(material, response) {
    axios.put(URL_MATERIAL_RATE, material, {
      headers: { token: 'oolivro' }
    })
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }
}
