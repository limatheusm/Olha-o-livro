import {
    User,
    UserAdm,
    UserDonator
} from '../../model/user';

export default class UserAbstractFactory {
    constructor() { }
    createUser() {
        throw new Error("Abstract method!");
    }
    createUserAdm() {
        throw new Error("Abstract method!");
    }
    createUserDonator() {
        throw new Error("Abstract method!");
    }
}