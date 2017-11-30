/*
    Decorator para as classes de controle
*/

const UserControl = require('./UserControl');

class UserControlDecorator extends UserControl{
    constructor (userControl){
        super(userControl.getUserDao(), userControl.getDaoOperation());
        this.control = userControl;
    }

    execute (req, res) {
        this.control.execute(req, res);
    }
}

module.exports = UserControlDecorator;