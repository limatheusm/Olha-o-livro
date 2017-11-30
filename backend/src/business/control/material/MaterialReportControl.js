/*
    Classe para o controle de acesso à geração de relatórios sobre os usuários
*/
const MaterialControl = require('./MaterialControl');

class MaterialReportControl extends MaterialControl{
    constructor (materialDao) {
        super(materialDao);
    }

    execute (req, res) {
        this.materialDao.report(req, res);
    }
}

module.exports = MaterialReportControl;