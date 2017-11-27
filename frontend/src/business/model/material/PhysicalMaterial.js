import { Material } from './'

class PhysicalMaterial extends Material {
    constructor(key) {
        super(key);
        this._isbn = "978-85-7522-408-3"
    }

    get isbn() {
        return this._isbn;
    }

    set isbn(isbn) {
        if (isbn) {
            this._isbn = isbn;
        }
    }
}

export { PhysicalMaterial }