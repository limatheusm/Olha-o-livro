import axios from 'axios';
import {
  URL_LIST_ALL_MATERIAL,
  URL_MATERIAL_GET,
  URL_LIST_CATEGORY,
  URL_LIST_TITLE 
} from '../../util/routes';

export default class ListMaterials {
  // falta definir rota
  getListAllMaterials(response) {
    axios.get(URL_LIST_ALL_MATERIAL)
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }

  getMaterial(material, response) {
    axios.get(`${URL_MATERIAL_GET}?id=${material.id}`)
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }

  getMaterialCategory(material, response) {
    axios.get(`${URL_LIST_CATEGORY}?category=${material.category}`)
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }

  getMaterialTitle(material, response) {
    axios.get(`${URL_LIST_TITLE}?title=${material.title}`)
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }

  // falta definir rota
  getListMyMaterials(response) {
    axios.get(URL_LIST_MY_MATERIAL)
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }
}
