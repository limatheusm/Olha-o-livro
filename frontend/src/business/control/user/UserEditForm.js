import axios from 'axios'
import URL_USER_EDIT_FORM from '../../util/routes'

export default class UserEditForm {
    
    constructor() {}

    editUser(user, response) {
        axios.put(URL_USER_EDIT_FORM, user)
            .then(res => response(true, res))
            .catch(err => response(false, res));
    }
}