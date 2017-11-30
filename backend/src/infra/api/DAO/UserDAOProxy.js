/*
    Controle proxy para acesso e modificação do banco de dados usuários
*/

const UserDAO = require('./UserDAO');

class UserDAOProxy{
    constructor(){
        this.dao = new UserDAO();
    }

    insert (req, res){
        if (this._defaultValidation(req.headers)){
            this.dao.insert(req.body, res);

        }else{
            res.send({'error' : true, 'message' : 'Sem permissão!'});
        }
    }

    login (req, res) {
        if (this._defaultValidation(req.headers)){
            this.dao.login(req.query, res);

        }else{
            res.send({'error' : true, 'message' : 'Sem permissão!'});
        }
    }

    find (req, res) {
        if (this._defaultValidation(req.headers)){
            this.dao.find(req.params.id, res);

        }else{
            res.send({'error' : true, 'message' : 'Sem permissão!'});
        }
    }

    remove (req, res) {
        if (this._defaultValidation(req.headers)){
            this.dao.remove(req.query.id, res);

        }else{
            res.send({'error' : true, 'message' : 'Sem permissão!'});
        }
    }

    update (req, res) {
        if (this._defaultValidation(req.headers)){
            this.dao.update(req.body, res);

        }else{
            res.send({'error' : true, 'message' : 'Sem permissão!'});
        }
    }

    report (req, res) {
        if (req.headers.token && req.headers.token === "oolivroadm"){
            this.dao.report(res);

        }else{
            res.send({'error' : true, 'message' : 'Sem permissão!'});
        }
    }

    _defaultValidation (headers) {
        return (headers.token && (headers.token === "oolivro" || headers.token === "oolivroadm"));
    }

}

module.exports = UserDAOProxy;