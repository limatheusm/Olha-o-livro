export default class UserAbstractFactory {
    createUser() {
        throw new Error('Abstract method!');
    }
    createUserAdm() {
        throw new Error('Abstract method!');
    }
    createUserDonator() {
        throw new Error('Abstract method!');
    }
}
