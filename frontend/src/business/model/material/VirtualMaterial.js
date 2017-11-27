import { Material } from './'

class VirtualMaterial extends Material {
    constructor(key) {
        super(key);
        this._link = "http://www.dcc.ufrj.br/~fabiom/mab225/pythonbasico.pdf"
    }

    get link() {
        return this._link;
    }

    set link(link) {
        if (link) {
            this._link = link;
        }
    }
}

export { VirtualMaterial }