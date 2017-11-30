/*
    Classe para o controle do registro de um material
*/

const MaterialControl = require('./MaterialControl');
const VoidValidator = require('../VoidValidator');

class MaterialRegisterControl extends MaterialControl{
    constructor (materialDao) {
        super(materialDao);
    }

    execute (req, res) {
        let message = ''
        let voidValidator = new VoidValidator();

        message = voidValidator.valid(req.body)

        if (message !== '') {
            res.send({'error' : true, 'message' : message})
        } else {
            this.materialDao.insert(req, res);
        }
    }
}

module.exports = MaterialRegisterControl;