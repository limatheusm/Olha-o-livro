import axios from 'axios'
import URL_USER_LOGIN_FORM from '../../util/routes'

export default class UserLoginForm {
    
    constructor() {}

    getUserLogin(user, response) {
        axios.get(URL_USER_LOGIN_FORM)
            .then(res => response(true, res))
            .catch(res => response(false, res))
    }
}