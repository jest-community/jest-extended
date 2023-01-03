export class Counter {
  constructor() {
    this.increment = this.increment.bind(this);
    this.count = this.count.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this._val = this._val || 0;
    this._val++;
  }

  count() {
    return this._val || 0;
  }

  reset() {
    this._val = 0;
  }
}
