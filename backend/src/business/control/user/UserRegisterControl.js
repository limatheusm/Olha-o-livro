/*
    Classe para controlar o registro de um usuário
*/
const UserControlDecorator = require('./UserControlDecorator');

class UserRegisterControl extends UserControlDecorator{
    constructor (userControl, completeValidator) {
        super(userControl);
        this.completeValidator = completeValidator;
    }

    execute (req, res) {
        let message = '';

        message = this.completeValidator.valid(req.body);

        if (message !== ''){
            res.send({'error' : true, 'message' : message});
        } else {
            super.execute(req, res);
        }
    }
}

module.exports = UserRegisterControl;