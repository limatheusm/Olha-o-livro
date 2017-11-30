/*
    Classe de acesso ao mongo para Usuários
*/
const mongoose = require('mongoose');
const Types = mongoose.Types;
const User = require('../schemas/userSchema');
const Material = require('../schemas/materialSchema');


let _instance = null;

class UserDAO{

    constructor () {
        if (!_instance) _instance = this;

        return _instance;
    }

    insert (userData, res) {    // Inserir um novo usuário no banco
        User.find({'mail' : userData.mail}, (err, result) => {  // Verifica se o email já está cadastrado
            if (err) {
                res.send({'error': true});
            } else {
                if (result.length == 0) {
                    if (userData.materials) {
                        for (var i = 0; i < userData.materials.length; i++){
                            userData.materials[i] = Types.ObjectId(userData.materials[i]);
                        }
                    } else {
                        userData.materials = [];
                    }
    
                    var user = new User(userData);
                    user.save((err, user) => {  // Salva no banco
                        if (err) {
                            res.send({ 'error' : true });
                        } else {
                            res.send({ 'error' : false,
                                        'id' : user._id.toString()});
                        }
                    });
                } else {
                    res.send({'error' : true, 'message': 'E-mail já cadastrado!'})
                }
            }
        });
    }

    login (user, res) {     // Confirmar se o usuário está cadastrado no sistema
        try{
            User.find({ 'mail' : user.mail,
                        'password' : user.password}, (err, user) => {
                try{
                    if (err) {
                        res.send({'error' : true})

                    } else if (user.length == 0) {
                        res.send({'error' : true})

                    } else {
                        res.send({'error' : false, 'data' : user});
                    }

                } catch (error){
                    res.send({'error' : true});
                }
                
            });
        }catch (err){
            res.send({'error' : true});
        }
    }

    find (userId, res) {    // Procura um usuário no banco
        try{
            User.findById(Types.ObjectId(userId), (err, user) => {
                try{
                    if (err){
                        res.send({'error' : true});
                    } else {
                        res.send({'error' : false, 'data' : user});
                    }
                } catch (error){
                    res.send({'error' : true});
                }
                
            });
        }catch (err){
            res.send({'error' : true});
        }
    }

    remove (id, res) {  // Remove um usuário do banco
        User.remove({ '_id' : Types.ObjectId(id) }, (err) => {
            if (err){
                res.send({'error' : true});
            } else {
                Material.remove({'ownerID' : Types.ObjectId(id)}, (err) => {
                    if (err){
                        res.send({'error' : true});
                    } else {
                        res.send({'error' : false});
                    }
                })
            }
        });
    }

    update (user, res) {    // Atualiza os dados de um usuário
        User.update({'_id' : Types.ObjectId(user._id)}, user, (err) => {
            if (err){
                res.send({'error' : true});
            }else{
                res.send({'error': false});
            }
        });
    }

    addMaterial (userId, materialId, res) {     // Adiciona um material na lista de materiais do usuário
        User.update({'_id' : userId}, {'$push' : { materials : materialId }}, (err, result) => {
            if (err){
                res.send({'error' : true});                
            }else{
                res.send({'error' : false, 'id' : materialId.toString()});
            }
        });
    }

    removeMaterial (materialId, res){   // Remove um material da lista de materiais do usuário
        User.update({'materials' : materialId}, {'$pop' : {'materials' : materialId}}, (err) => {
            if (err){
                res.send({'error' : true});
            } else {
                res.send({'error' : false});
            }
        });
    }

    report (res) {
        User.find({}, (err, users) => {
            if (err) {
                res.send({'error' : true, 'message' : 'Erro ao acessar os usuários no banco!'});
            } else {
                res.send({'error' : false, 'report': this._reportGenerator(users)});
            }
        });
    }

    _reportGenerator (users) {
        let infos = {};
        infos.quant = users.length; // Quantidade de usuários cadastrados
        infos.from = {};    // Quantidade de usuários por localidade
        infos.materials = 0;    // Média de materiais cadastrados por usuário
        infos.adm = 0;  // Quantidade de usuários administradores do sistema

        if (users.length > 0) {
            users.forEach(element => {
                if (infos.from[element.from]) {
                    infos.from[element.from]++;
                } else {
                    infos.from[element.from] = 1;
                }
    
                infos.materials += element.materials.length;
    
                if (element.tokenAuth == "oolivroadm") {
                    infos.adm++
                }
            });
    
            infos.materials = infos.materials/users.length;
        }

        return (infos);
    }
}

module.exports = UserDAO;