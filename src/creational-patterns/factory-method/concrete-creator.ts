import { ConcreteProduct1, ConcreteProduct2 } from './concrete-product';
import { Creator } from './creator';
import { Product } from './product.interface';

export class ConcreteCreator1 extends Creator {
  factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

export class ConcreteCreator2 extends Creator {
  factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}
