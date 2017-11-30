/*
    Classe para o controle de busca dos materiais
*/

const MaterialControl = require('./MaterialControl');

class SearchMaterialControl extends MaterialControl{
    constructor (materialDao) {
        super(materialDao);
    }

    execute (req, res) {
        if (req.params.title && req.params.title !== ''){
            this.materialDao.search(req, res);
        } else {
            res.send({'error' : true, 'message' : 'O título do material não é válido!'})
        }
    }
}

module.exports = SearchMaterialControl;