/*
    Definição das rotas para as requisições de Material
*/

const express = require('express');
const router = express.Router();
const UserControlFactory = require('../../business/control/user/UserControlFactory');
const userControlFacotry = new UserControlFactory();

router.post('/', (req, res) => {    // Registrar usuário
    userControlFacotry.getControl('register').execute(req, res);

}).delete('/', (req, res) => {  // Apagar usuário
    userControlFacotry.getControl('remove').execute(req, res);

}).put('/', (req, res) => {     // Atualizar usuário
    userControlFacotry.getControl('edit').execute(req, res);
});

router.get('/login', (req, res) => {    // Login do usuário
    userControlFacotry.getControl('login').execute(req, res);
});

router.get('/donator/:id', (req, res) => {    // Informações de um doador
    userControlFacotry.getControl('donator').execute(req, res);
});

router.get('/get/report', (req, res) => {
    userControlFacotry.getControl('report').execute(req, res);
}); 


module.exports = router;