import axios from 'axios'
import { URL_MATERIAL_REGISTER_FORM } from '../../util/routes'

export default class MaterialRegisterForm {

    constructor() {}

    // falta definir rota
    registerMaterial(material, response) {
        axios.post(URL_MATERIAL_REGISTER_FORM, material)
            .then(res => response(true, res))
            .catch(res => response(false, res));
    }
}