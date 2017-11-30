/*
    Verifica se algum campo não foi preenchido
*/
const Validator = require('./Validator');

class VoidValidator extends Validator{
    valid (params){
        let message = '';
        let error = false;

        if (params.length == 0) {
            return ('Nenhum parâmetro foi encontrado!');
        }

        Object.keys(params).forEach((key) => {
            if (!error){
                if (params[key] === ''){
                    message = 'O campo \'' + key + '\' não pode ser vazio!';
                    error = true;
                }
            } else {
                return;
            }
        });

        return message;
    }
}

module.exports = VoidValidator;