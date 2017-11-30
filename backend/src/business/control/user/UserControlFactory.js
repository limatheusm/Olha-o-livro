/*
    Fabrica para a construção de objetos UserControl
*/
const UserRegisterControl = require('./UserRegisterControl');
const UserEditControl = require('./UserEditControl');
const DonatorDetailControl = require('./DonatorDetailControl');
const LoginControl = require('./LoginControl');
const UserRemoveControl = require('./UserRemoveControl');
const UserReportControl = require('./UserReportControl');
const UserControl = require('./UserControl');

const UserDaoProxy = require('../../../infra/api/DAO/UserDAOProxy');

const VoidValidator = require('../VoidValidator');
const LoginValidator = require('./LoginValidator');
const UserCompleteValidator = require('./UserCompleteValidator');

class UserControlFactory{

    constructor () {
        this.controls = {}
        this.controls.register = new UserRegisterControl(new UserControl(new UserDaoProxy(), 'insert'),
                                                         new UserCompleteValidator());
        this.controls.edit = new UserEditControl (new UserControl(new UserDaoProxy(), 'update'),
                                                  new UserCompleteValidator());
        this.controls.donator = new DonatorDetailControl(new UserControl(new UserDaoProxy(), 'find'),
                                                     new VoidValidator());
        this.controls.login = new LoginControl(new UserControl(new UserDaoProxy(), 'login'),
                                               new LoginValidator());
        this.controls.remove = new UserRemoveControl(new UserControl(new UserDaoProxy(), 'remove'),
                                                     new VoidValidator());
        this.controls.report = new UserReportControl(new UserControl(new UserDaoProxy(), 'report'));
    }

    getControl (controlType) {
        return this.controls[controlType];
    }
}

module.exports = UserControlFactory;