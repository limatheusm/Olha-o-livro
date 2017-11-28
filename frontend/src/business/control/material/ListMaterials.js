import axios from 'axios'
import { URL_LIST_ALL_MATERIAL, URL_LIST_MY_MATERIAL } from '../../util/routes'

export default class ListMaterials {
    
    constructor() {}
    
    // falta definir rota
    getListAllMaterials(response) {
        axios.get(URL_LIST_ALL_MATERIAL)
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
