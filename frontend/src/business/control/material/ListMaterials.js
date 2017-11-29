import axios from 'axios';
import {
  URL_LIST_ALL_MATERIAL,
  URL_MATERIAL_GET,
  URL_LIST_CATEGORY,
  URL_LIST_TITLE
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
    axios.get(`${URL_MATERIAL_GET}${material._id}`, {
      headers: { token: 'oolivro' }
    })
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }

  getMaterialCategory(category, response) {
    axios.get(`${URL_LIST_CATEGORY}${category}`, {
      headers: { token: 'oolivro' }
    })
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }

  getMaterialTitle(title, response) {
    title.replace(' ', '%20');
    axios.get(`${URL_LIST_TITLE}${title}`, {
      headers: { token: 'oolivro' }
    })
      .then(res => response(true, res))
      .catch(err => response(false, err));
  }
}
