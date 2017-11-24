const express = require('express') // Singleton


module.exports = server => {

    // Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    // Rotas
    
    // Material
    const Material = require('../api/DAO/MaterialDAO')
    Material.register(router, '/material')
    
    // User
    const User = require('../api/DAO/UserDAO')
    User.register(router, '/user')
}