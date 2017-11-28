import axios from 'axios'
import { URL_EDIT_MATERIAL, URL_DELETE_MATERIAL, URL_MATERIAL_RATE } from '../../util/routes'

export default class MaterialEditForm {

    constructor() {}

    editMaterial(material, response) {
        axios.put(URL_EDIT_MATERIAL, material)
            .then(res => response(true, res))
            .catch(err => response(false, res));
    }

    deleteMaterial(material, response) {
        axios.delete(`${URL_DELETE_MATERIAL}?id=${material._id}`)
            .then(res => response(true, res))
            .catch(err => response(false, res));
    }

    editMaterialRate(material, response) {
        axios.put(`${URL_MATERIAL_RATE}?id=${material._id}`, material)
            .then(res => response(true, res))
            .catch(err => response(false, res));
    }
}