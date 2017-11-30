/*
    Controle proxy para acesso e modificação do banco de dados dos materiais
*/

const MaterialDAO = require('./MaterialDAO');

class MaterialDAOProxy{
    constructor () {
        this.dao = new MaterialDAO();
    }

    insert (req, res) {
        if (this._defaultValidation(req.headers)){
            this.dao.insert(req.body, res);

        }else{
            res.send({'error' : true, 'message' : 'Sem premissão!'});
        }
    }

    find (req, res) {
        if (this._defaultValidation(req.headers)){
            this.dao.find(req.params.id, res);

        }else{
            res.send({'error' : true, 'message' : 'Sem premissão!'});
        }
    }

    findAll (req, res) {
        if (this._defaultValidation(req.headers)){
            this.dao.findAll(res);

        }else{
            res.send({'error' : true, 'message' : 'Sem premissão!'});
        }
    }

    update (req, res) {
        if (this._defaultValidation(req.headers)){
            this.dao.update(req.body, res);

        }else{
            res.send({'error' : true, 'message' : 'Sem premissão!'});
        }
    }

    remove (req, res) {
        if (this._defaultValidation(req.headers)){
            this.dao.remove(req.query.id, res);

        }else{
            res.send({'error' : true, 'message' : 'Sem premissão!'});
        }
    }

    list (req, res) {
        if (this._defaultValidation(req.headers)){
            this.dao.list(req.params.category, res);

        }else{
            res.send({'error' : true, 'message' : 'Sem premissão!'});
        }
    }

    search (req, res) {
        if (this._defaultValidation(req.headers)){
            this.dao.search(req.params.title, res);

        }else{
            res.send({'error' : true, 'message' : 'Sem premissão!'});
        }
    }

    updateRate (req, res) {
        if (this._defaultValidation(req.headers)){
            this.dao.updateRate(req.body._id, res);

        }else{
            res.send({'error' : true, 'message' : 'Sem premissão!'});
        }
    }

    report (req, res) {
        if (this._defaultValidation(req.headers)){
            this.dao.report(res);

        }else{
            res.send({'error' : true, 'message' : 'Sem premissão!'});
        }
    }

    _defaultValidation (headers) {
        return (headers.token && (headers.token === "oolivro" || headers.token === "oolivroadm"));
    }
}

module.exports = MaterialDAOProxy;