import axios from 'axios'
import { URL_USER_GET_DONATOR } from '../../util/routes'

export default class UserGetDonator {
    
    constructor() {}

    getDataDonator(donator, response) {
        axios.get(`${URL_USER_GET_DONATOR}?id=${donator._id}`)
            .then(res => response(true, res))
            .catch(err => response(false, res));
    }
}