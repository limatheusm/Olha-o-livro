import Iterator from '../../Iterator';

export default class MaterialsIterator extends Iterator {
  constructor(aggregate) {
    super();
    this.index = 0;
    this.aggregate = aggregate;
  }

  first() {
    return this.aggregate.list[0];
  }

  next() {
    this.index += 1;
    return this.aggregate.list[this.index];
  }

  isDone() {
    return this.index === this.aggregate.list.length;
  }

  currentItem() {
    if (this.isDone()) {
      this.index = this.aggregate.list.length - 1;
    } else if (this.index < 0) {
      this.index = 0;
    }
    return this.aggregate.list[this.index];
  }
}
