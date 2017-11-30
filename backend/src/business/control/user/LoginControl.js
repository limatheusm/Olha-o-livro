/*
    Classe para controle de login de usuário
*/
const UserControlDecorator = require('./UserControlDecorator');

class LoginControl extends UserControlDecorator{
    constructor (userControl, loginValidator) {
        super(userControl);
        this.loginValidator = loginValidator;
    }

    execute (req, res) {
        let message = '';
        
        message = this.loginValidator.valid(req.query);

        if (message !== '') {
            res.send({'error' : true, 'message' : message});
        } else {
            super.execute(req, res);
        }
    }
}

module.exports = LoginControl;