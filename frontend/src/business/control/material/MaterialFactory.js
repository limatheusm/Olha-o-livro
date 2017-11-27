import MaterialAbstractFactory from './MaterialAbstractFactory';
import {
    Material,
    PhysicalMaterial,
    VirtualMaterial
} from '../../model/material';

export default class MaterialFactory extends MaterialAbstractFactory {
    constructor() { super(); }

    getMaterial(type) {
        switch (type) {
            case 'material':
                return new Material();
            case 'physicalMaterial':
                return new PhysicalMaterial();
            case 'virtualMaterial':
                return new VirtualMaterial();
            default:
                throw new Error("Material type error!");
        }
    }
}