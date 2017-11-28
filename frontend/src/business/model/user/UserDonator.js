import { User } from './';

class UserDonator extends User {
    constructor() {
        super();
        this.tokenAuth = 'oolivro';
    }
}

export { UserDonator };
