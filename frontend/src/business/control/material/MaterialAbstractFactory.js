import {
    Material,
    PhysicalMaterial,
    VirtualMaterial
} from '../../model/material';

export class MaterialAbstractFactory {
    constructor() { }
    createMaterial() {
        throw new Error("Abstract method!");
    }
    createPhysicalMaterial() {
        throw new Error("Abstract method!");
    }
    createVirtualMaterial() {
        throw new Error("Abstract method!");
    }
}