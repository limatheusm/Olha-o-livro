/*
    Validar dados de login
*/

const Validator = require('../Validator');

class LoginValidator extends Validator{
    valid (params) {
        let message = '';

        message = this._emailValidator(params.mail);

        if (message !== ''){
            return (message);
        }

        message = this._passwordValidator(params.password);

        return (message);
    }

    _emailValidator (email) {
        let emailRegex = /.+@.+\.[a-zA-Z]+$/;

        if (!email.match(emailRegex)){
            return ("E-mail incorreto!");
        }
        
        return ('');
    }

    _passwordValidator (password) {
        let numbers = /\d/g;
        let letters = /[a-zA-Z]/g;
        let upperletters = /[A-Z]/g;

        if (password.length >= 6 && password.length <= 15) {
            let matchs = numbers.exec(password);
            let cont = 0;

            while (matchs) {
                cont++;
                matchs = numbers.exec(password);
            }

            if (cont >= 3) {
                matchs = letters.exec(password);
                cont = 0;

                while (matchs) {
                    cont++;
                    matchs = letters.exec(password);
                }

                if (cont >= 3) {
                    matchs = upperletters.exec(password);
                    cont = 0;

                    while (matchs) {
                        cont++;
                        matchs = upperletters.exec(password);
                    }

                    if (cont > 0) {
                        return ('');

                    } else {
                        return ('A senha deve conter pelo menor uma letra maiúscula!');
                    }

                } else {
                    return ('A senha deve conter pelo menos 3 letras!')
                }

            } else {
                return ('A senha deve conter pelo menos 3 números!')
            }
            
        } else {
            return ('A senha deve possuir entre 6 e 15 dígitos!')
        }
    }
}

module.exports = LoginValidator;