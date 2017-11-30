import Aggregate from '../../Aggregate';
import MaterialsIterator from './MaterialsIterator';

export default class MaterialsAggregate extends Aggregate {
  constructor(list) {
    super();
    this.list = list;
  }

  createIterator() {
    this.iterator = new MaterialsIterator(this);
  }
}
