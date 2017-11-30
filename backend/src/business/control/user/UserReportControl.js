/*
    Classe para o controle de acesso à geração de relatórios sobre os usuários
*/
const UserControlDecorator = require('./UserControlDecorator');

class UserReportControl extends UserControlDecorator{
    constructor (userControl) {
        super(userControl);
    }

    execute (req, res) {
        super.execute(req, res);
    }
}

module.exports = UserReportControl;