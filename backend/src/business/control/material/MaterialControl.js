/*
    Interface para os controles de materiais
*/
const Control = require('../Control');

class MaterialControl extends Control{
    constructor (materialDao) {
        super();
        this.materialDao = materialDao;
    }

    execute (req, res) {}
}

module.exports = MaterialControl;