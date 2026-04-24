export class Counter {
  private value: number;

  constructor() {
    this.increment = this.increment.bind(this);
    this.count = this.count.bind(this);
    this.reset = this.reset.bind(this);
    this.value = 0;
  }

  increment() {
    this.value++;
  }

  count() {
    return this.value;
  }

  reset() {
    this.value = 0;
  }
}
