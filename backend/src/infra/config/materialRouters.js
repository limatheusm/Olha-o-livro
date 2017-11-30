/*
    Definição das rotas para as requisições de Material
*/

const express = require('express');
const router = express.Router();
const MaterialControlFactory = require('../../business/control/material/MaterialControlFactory')
const materialControlFactory = new MaterialControlFactory();

router.post('/', (req, res) =>{  // Salvar material
    materialControlFactory.getControl('register').execute(req, res);

}).put('/', (req, res) => {     // Atualizar material
    materialControlFactory.getControl('edit').execute(req, res)

}).delete('/', (req, res) => {   // Apagar material
    materialControlFactory.getControl('delete').execute(req, res);
});

router.get('/:id', (req, res) => {  // Recuperar material
    materialControlFactory.getControl('detail').execute(req, res);
});

router.get('/list/:category', (req, res) => {  // Lista de materiais
    materialControlFactory.getControl('list').execute(req, res);
});

router.get('/search/:title', (req, res) => {     // Busca material por nome
    materialControlFactory.getControl('search').execute(req, res);
});

router.put('/rate', (req, res) => {     // Atualizar nota
    materialControlFactory.getControl('rate').execute(req, res);
});

router.get('/get/all', (req, res) => {   // Pegar todos os materiais do banco
    materialControlFactory.getControl('all').execute(req, res);
});

router.get('/get/report', (req, res) => {   // Gerar relatório dos materiais
    materialControlFactory.getControl('report').execute(req, res);
});

module.exports = router;
