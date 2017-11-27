import { User } from './';

class UserDonator extends User {
    constructor() {
        super();
        this._tokenAuth = "oolivro";
    }
}

export { UserDonator }