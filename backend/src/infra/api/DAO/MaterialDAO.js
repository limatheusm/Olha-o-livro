/*
    Classe de acesso ao mongo para o Material
*/
const mongoose = require('mongoose');
const Types = mongoose.Types;
const Material = require('../schemas/materialSchema');
const UserDAO = require('../DAO/UserDAO');

let _instance = null;

class MaterialDAO{
    constructor () {
        if (!_instance) _instance = this;

        this.userDao = new UserDAO();
        
        return _instance;
    }

    insert (material, res){
        material.ownerID = Types.ObjectId(material.ownerID)

        let new_material = new Material(material)

        new_material.save((err, result) => {    // Insere material no banco
            if (err){
                res.send({'error' : true});
            } else {
                this.userDao.addMaterial(result.ownerID, result._id, res);  // Atualiza a lista de materiais do doador
            }
        });
    }

    find (materialId, res) {
        Material.findById(Types.ObjectId(materialId), (err, result) => {    // Busca um material pelo ID
            if (err){
                res.send({'error' : true});
            }else{
                res.send({'error' : false, 'data' : result});
            }
        });
    }

    update (material, res){
        Material.update({'_id' : Types.ObjectId(material._id)}, material, (err) => {    // Atualiza os dados de um material
            if (err){
                res.send({'error' : true});
            }else{
                res.send({'error' : false});
            }
        });
    }

    remove (materialId, res) {
        Material.remove({'_id' : Types.ObjectId(materialId)}, (err) => {  // Remove um material pelo ID
            if (err){
                res.send({'error' : true});                
            } else {
                this.userDao.removeMaterial(Types.ObjectId(materialId), res);
            }
        })
    }

    findAll (res) {
        Material.find({}, (err, result) => {
            if (err) {
                res.send({'error' : true, 'message' : 'Ocorreu um erro!'});
            } else {
                res.send({'error' : false, 'data' : result});
            }
        })
    }

    list (category, res) {  // Pegar o materiais de uma categoria
        Material.find({ 'category' : category}, (err, result) => {
            if (err){
                res.send({'error' : true});
            } else {
                res.send({'error' : false, 'data' : result});
            }
        });
    }

    search (materialTitle, res) {   // Busca um material pelo nome
        Material.find({'title' : materialTitle}, (err, result) => {
            if (err){
                res.send({'error' : true});
            } else {
                res.send({'error' : false, 'data' : result});
            }
        });
    }

    updateRate (materialId, res) {  // Atualizar nota do material
        Material.update({'_id' : Types.ObjectId(materialId)}, {'$inc' : { 'heart' : 1}}, (err) => {
            if (err){
                res.send({'error' : true});
            } else {
                res.send({'error' : false});
            }
        });
    }

    report (res) {
        Material.find({}, (err, materials) => {
            if (err) {
                res.send({'error' : true, 'message' : 'Erro ao acessar os materiais no banco!'});
            } else {
                res.send({'error' : false, 'report' : this._reportGenerator(materials)});
            }
        });
    }

    _reportGenerator(materials) {
        let infos = {};
        infos.quant = materials.length; // Quantidade de materiais no sistema
        infos.type = {};    // Tipos de materiais no sistema
        infos.sharingType = {}; // Tipos de compatilhamento dos materiasi
        infos.physical = 0; // Quantidade de materiais físicos
        infos.digital = 0;  // Quantidade de materiais digitais
        infos.heart = 0;    // Média de corações    
        infos.local = {};   // Locais dos materiais
        infos.category = {};    // Quantidade materiais em cada categoria cadastrada
        infos.available = 0;    // Quanidade de materiais disponíveis

        if (materials.length > 0) {
            materials.forEach(element => {
                if (infos.type[element.type]){
                    infos.type[element.type]++;
                } else {
                    infos.type[element.type] = 1;
                }
    
                if (infos.sharingType[element.sharingType]){
                    infos.sharingType[element.sharingType]++;
                } else {
                    infos.sharingType[element.sharingType] = 1;
                }
    
                if (element.link) {
                    infos.digital++;
                } else {
                    infos.physical++;
                }
    
                if (infos.local[element.local]) {
                    infos.local[element.local]++;
                }else{
                    infos.local[element.local] = 1;
                }
    
                element.category.forEach(cat => {
                    if (infos.category[cat]){
                        infos.category[cat]++;
                    } else {
                        infos.category[cat] = 1;
                    }
                });
    
                if (element.available) {
                    infos.available++;
                }
    
                infos.heart += element.heart;
            });
    
            infos.available = infos.available/infos.quant;
            infos.heart = infos.heart/infos.quant;
        }

        return (infos);
    }
}


module.exports = MaterialDAO;