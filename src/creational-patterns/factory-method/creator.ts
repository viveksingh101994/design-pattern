import { Product } from './product.interface';

export abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: is working for ${product.operation()}`;
  }
}
