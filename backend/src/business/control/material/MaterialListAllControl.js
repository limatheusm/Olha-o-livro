/*
    Classe para controlar a listagem de todos os materiais do baco
*/

const MaterialControl = require('./MaterialControl');

class MaterialListAllControl extends MaterialControl{
    constructor (materialDao) {
        super(materialDao);
    }

    execute (req, res) {
        this.materialDao.findAll(req, res);
    }
}

module.exports = MaterialListAllControl;