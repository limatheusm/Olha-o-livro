/*
    Classe para o controle dos likes de um material
*/

const MaterialControl = require('./MaterialControl');

class MaterialRateControl extends MaterialControl{
    constructor (materialDao) {
        super(materialDao);
    }

    execute (req, res) {
        if (req.body._id && req.body._id !== ''){
            this.materialDao.updateRate(req, res);
        } else {
            res.send({'error' : true, 'message' : 'O id do material não é válido!'})
        }
    }
}

module.exports = MaterialRateControl;