export default class Iterator {
  constructor() {
  }

  first() {
    throw new Error('Abstract method!');
  }

  next() {
    throw new Error('Abstract method!');
  }

  isDone() {
    throw new Error('Abstract method!');
  }

  currentItem() {
    throw new Error('Abstract method!');
  }
}
