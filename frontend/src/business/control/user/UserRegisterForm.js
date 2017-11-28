import axios from 'axios'
import { URL_USER_REGISTER_FORM } from '../../util/routes'

export default class UserRegisterForm {

    constructor() {}

    
    registerUser(user, response) {
        axios.post(URL_USER_REGISTER_FORM, user)
            .then(res => response(true, res))
            .catch(res => response(false, res));
    }
}