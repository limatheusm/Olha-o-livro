/*
    Classe para controle de listagem de materiais
*/
const MaterialControl = require('./MaterialControl');

class ListMaterialControl extends MaterialControl{
    constructor (materialDao) {
        super(materialDao);
    }

    execute (req, res) {
        if (req.params.category && req.params.category !== ""){
            this.materialDao.list(req, res);
        } else {
            res.send({'error' : true, 'message' : 'A parâmentro \'categoria\' não foi preenchido!'});
        }
    }
}

module.exports = ListMaterialControl;