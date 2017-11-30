/*
    Classe para o controle da edição de um material
*/

const MaterialControl = require('./MaterialControl');
const VoidValidator = require('../VoidValidator');

class MaterialEditControl extends MaterialControl{
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
            this.materialDao.update(req, res);
        }
    }
}

module.exports = MaterialEditControl;