import axios from 'axios';
import {
  URL_EDIT_MATERIAL,
  URL_DELETE_MATERIAL,
  URL_MATERIAL_RATE
} from '../../util/routes';

export default class MaterialEditForm {
  editMaterial(material, response) {
    axios.put(URL_EDIT_MATERIAL, material)
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }

  deleteMaterial(material, response) {
    axios.delete(`${URL_DELETE_MATERIAL}?id=${material.id}`)
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }

  editMaterialRate(material, response) {
    axios.put(`${URL_MATERIAL_RATE}?id=${material.id}`, material)
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }
}
