import { User } from './';

class UserAdm extends User {
    constructor() {
        super();
        this._tokenAuth = "";
    }

    get tokenAuth() {
        return this._tokenAuth;
    }

    set tokenAuth(tokenAuth) {
        if (tokenAuth) {
            this._tokenAuth = tokenAuth;
        }
    }
}

export { UserAdm }