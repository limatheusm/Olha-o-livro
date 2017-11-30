/*
    Classe para controlar o acesso aos dados de doadores
*/
const UserControlDecorator = require('./UserControlDecorator');

class DonatorDatailControl extends UserControlDecorator{
    constructor (userControl, voidValidator) {
        super(userControl);
        this.voidValidator = voidValidator
    }

    execute (req, res) {
        let message = '';

        message = this.voidValidator.valid(req.query)
        
        if (message !== ''){
            res.send({'error' : true, 'message' : message});

        } else {
            super.execute(req, res);
        }
    }
}

module.exports = DonatorDatailControl;