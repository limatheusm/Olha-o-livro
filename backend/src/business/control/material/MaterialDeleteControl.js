/*
    Classe para controle de remoção de material
*/
const MaterialControl = require('./MaterialControl');

class MaterialDeleteControl extends MaterialControl{
    constructor (materialDao) {
        super(materialDao);
    }
    execute (req, res) {
        if (req.query.id && req.query.id !== ''){
            this.materialDao.remove(req, res);
        } else {
            res.send({'error' : true, 'message' : 'O id do material não é válido!'})
        }
    }
}

module.exports = MaterialDeleteControl;