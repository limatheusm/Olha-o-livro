/*
    Interface para as classes de controle
*/

const Control = require('../Control');

class UserControl extends Control{
    constructor (userDao ,daoOperation) {
        super();
        this.userDao = userDao;
        this.daoOperation = daoOperation;
    }

    execute(req, res){
        this.userDao[this.daoOperation](req, res)
    }

    getDaoOperation () {
        return this.daoOperation;
    }

    getUserDao() {
        return this.userDao;
    }
}

module.exports = UserControl;