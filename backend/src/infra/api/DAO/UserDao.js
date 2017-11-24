/*
    Servicos REST
*/

const User = require('../schemas/userSchema')

User.methods(['get', 'post', 'put', 'delete'])
User.updateOptions({ new: true, runValidators: true })

module.exports = User