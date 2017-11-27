import { User } from './';

class UserAdm extends User {
    constructor() {
        super();
        this._tokenAuth = "oolivroadm";
    }
}

export { UserAdm }