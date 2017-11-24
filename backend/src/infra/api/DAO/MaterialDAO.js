/*
    Servicos REST
*/

const Material = require('../schemas/materialSchema')

Material.methods(['get', 'post', 'put', 'delete'])
Material.updateOptions({ new: true, runValidators: true })

module.exports = Material