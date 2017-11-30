/*
    Classe para validar informações do usuário
*/
const Validator = require('../Validator');
const LoginValidator = require('./LoginValidator');
const VoidValidator = require('../VoidValidator')

class UserCompleteValidator extends Validator{
    valid (params) {
        let message = ''
        let loginValidator = new LoginValidator();
        let voidValidator = new VoidValidator();

        message = voidValidator.valid(params);
        
        if (message !== '') {
            return (message);
        }

        message = loginValidator.valid(params);

        if (message !== '') {
            return (message);
        }

        message = this._nameValidator(params.name);

        return (message);
    }

    _nameValidator (name) {
        let nameRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+[ [A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+]*$/;

        if(!name.match(nameRegex)){
            return ('Nome incorreto!');
        }

        return ('');
    }

}

module.exports = UserCompleteValidator;