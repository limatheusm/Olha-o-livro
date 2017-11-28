export default class MaterialAbstractFactory {
  createMaterial() {
    throw new Error('Abstract method!');
  }
  createPhysicalMaterial() {
    throw new Error('Abstract method!');
  }
  createVirtualMaterial() {
    throw new Error('Abstract method!');
  }
}
