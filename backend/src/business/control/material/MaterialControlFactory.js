/*
    Fábrica para os controles de materiais
*/
const ListMaterialControl = require('./ListMaterialControl');
const MaterialDeleteControl = require('./MaterialDeleteControl');
const MaterialRateControl = require('./MaterialRateControl');
const SearchMaterialControl = require('./SearchMaterialControl');
const MaterialDetailControl = require('./MaterialDetailControl');
const MaterialEditControl = require('./MaterialEditControl');
const MaterialRegisterControl = require('./MaterialRegisterControl');
const MaterialListAllControl = require('./MaterialListAllControl');
const MaterialReportControl = require('./MaterialReportControl');

const MaterialDaoProxy = require('../../../infra/api/DAO/MaterialDAOProxy');

class MaterialControlFactory{
    constructor () {
        this.controls = {};
        this.controls.list = ListMaterialControl;
        this.controls.delete = MaterialDeleteControl;
        this.controls.rate = MaterialRateControl;
        this.controls.search = SearchMaterialControl;
        this.controls.detail = MaterialDetailControl;
        this.controls.edit = MaterialEditControl;
        this.controls.register = MaterialRegisterControl;
        this.controls.all = MaterialListAllControl;
        this.controls.report = MaterialReportControl;
    }

    getControl (controlType) {
        let control = this.controls[controlType];

        return new control(new MaterialDaoProxy());
    }
}

module.exports = MaterialControlFactory;