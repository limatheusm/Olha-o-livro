import { User } from './';

class UserAdm extends User {
    constructor() {
        super();
        this.tokenAuth = "";
    }
}

export { UserAdm }