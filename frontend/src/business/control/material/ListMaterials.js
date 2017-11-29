import axios from 'axios';
import {
  URL_LIST_ALL_MATERIAL,
  URL_MATERIAL_GET,
  URL_LIST_CATEGORY,
  URL_LIST_TITLE,
  URL_LIST_MY_MATERIAL
} from '../../util/routes';

export default class ListMaterials {
  getListAllMaterials(response) {
    axios.get(URL_LIST_ALL_MATERIAL, {
      headers: { token: 'oolivro' }
    })
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }

  getMaterial(material, response) {
    axios.get(`${URL_MATERIAL_GET}?id=${material.id}`, {
      headers: { token: 'oolivro' }
    })
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }

  getMaterialCategory(material, response) {
    axios.get(`${URL_LIST_CATEGORY}?category=${material.category}`, {
      headers: { token: 'oolivro' }
    })
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }

  getMaterialTitle(material, response) {
    axios.get(`${URL_LIST_TITLE}?title=${material.title}`, {
      headers: { token: 'oolivro' }
    })
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }

  // falta definir rota
  getListMyMaterials(response) {
    axios.get(URL_LIST_MY_MATERIAL, {
      headers: { token: 'oolivro' }
    })
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }
}
