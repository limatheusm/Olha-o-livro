import axios from 'axios'
import { URL_LIST_ALL_MATERIAL, URL_MATERIAL_GET, URL_LIST_CATEGORY, URL_LIST_TITLE } from '../../util/routes'

export default class ListMaterials {
    
    constructor() {}
    
    // falta definir rota
    getListAllMaterials(response) {
        axios.get(URL_LIST_ALL_MATERIAL)
            .then(res => response(true, res))
            .catch(err => response(false, err));
    }

    getMaterial(material, response) {
        axios.get(`${URL_MATERIAL_GET}?id=${material._id}`)
            .then(res => response(true, res))
            .catch(err => response(false, err));
    }

    getMaterialCategory(material, response) {
        axios.get(`${URL_LIST_CATEGORY}?category=${material._category}`)
            .then(res => response(true, res))
            .catch(err => response(false, err));
    }

    getMaterialTitle(material, response) {
        axios.get(`${URL_LIST_TITLE}?title=${material._title}`)
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
