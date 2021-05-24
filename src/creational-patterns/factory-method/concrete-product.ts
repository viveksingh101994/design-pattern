import { Product } from './product.interface';

export class ConcreteProduct1 implements Product {
  operation(): string {
    return 'Result of the concrete product 1';
  }
}

export class ConcreteProduct2 implements Product {
  operation(): string {
    return 'Result of the concrete product 2';
  }
}
