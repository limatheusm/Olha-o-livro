import axios from 'axios'
import URL_EDIT_MATERIAL from '../../util/routes'

export default class MaterialEditForm {

    constructor() {}

    // falta definir rota
    editMaterial(material, response) {
        axios.put(URL_EDIT_MATERIAL, material)
            .then(res => response(true, res))
            .catch(err => response(false, res));
    }
}