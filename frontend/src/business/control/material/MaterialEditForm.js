import axios from 'axios'
import { URL_EDIT_MATERIAL, URL_DELETE_MATERIAL } from '../../util/routes'

export default class MaterialEditForm {

    constructor() {}

    editMaterial(material, response) {
        axios.put(`${URL_EDIT_MATERIAL}${material._id}`, material)
            .then(res => response(true, res))
            .catch(err => response(false, res));
    }

    deleteMaterial(material, response) {
        axios.delete(`${URL_DELETE_MATERIAL}${material._id}`, material)
            .then(res => response(true, res))
            .catch(err => response(false, res));
    }
}