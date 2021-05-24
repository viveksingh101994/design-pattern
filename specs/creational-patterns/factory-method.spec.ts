import { clientCode } from '../../src/creational-patterns/factory-method';
import { ConcreteCreator1, ConcreteCreator2 } from '../../src/creational-patterns/factory-method/concrete-creator';
import { ConcreteProduct1, ConcreteProduct2 } from '../../src/creational-patterns/factory-method/concrete-product';
import { Creator } from '../../src/creational-patterns/factory-method/creator';

describe('Factory-method', () => {
  describe('Concrete Product1', () => {
    const concreteProduct: ConcreteProduct1 = new ConcreteProduct1();
    it('should have instace of ConcreteProduct1', () => {
      expect(concreteProduct).toBeInstanceOf(ConcreteProduct1);
    });

    it('should have operation method', () => {
      expect(concreteProduct.operation).toBeInstanceOf(Function);
    });

    it('should return Result of the concrete product 1 when calling operation', () => {
      expect(concreteProduct.operation()).toBe('Result of the concrete product 1');
    });
  });
  describe('Concrete Product2', () => {
    const concreteProduct: ConcreteProduct2 = new ConcreteProduct2();
    it('should have instace of ConcreteProduct1', () => {
      expect(concreteProduct).toBeInstanceOf(ConcreteProduct2);
    });

    it('should have operation method', () => {
      expect(concreteProduct.operation).toBeInstanceOf(Function);
    });

    it('should return Result of the concrete product 1 when calling operation', () => {
      expect(concreteProduct.operation()).toBe('Result of the concrete product 2');
    });
  });
  describe('ConcreteCreator1', () => {
    const concreteCreator1: Creator = new ConcreteCreator1();
    it('should have instance of Creator', () => {
      expect(concreteCreator1).toBeInstanceOf(Creator);
    });

    it('should have someOperation method', () => {
      expect(concreteCreator1.someOperation).toBeInstanceOf(Function);
    });

    it('should have factoryMethod method', () => {
      expect(concreteCreator1.factoryMethod).toBeInstanceOf(Function);
    });

    it(`should return 'Creator: is working for Result of the concrete product 1'`, () => {
      expect(concreteCreator1.someOperation()).toBe('Creator: is working for Result of the concrete product 1');
    });
  });

  describe('ConcreteCreator2', () => {
    const concreteCreator2: Creator = new ConcreteCreator2();
    it('should have instance of Creator', () => {
      expect(concreteCreator2).toBeInstanceOf(Creator);
    });

    it('should have someOperation method', () => {
      expect(concreteCreator2.someOperation).toBeInstanceOf(Function);
    });

    it('should have factoryMethod method', () => {
      expect(concreteCreator2.factoryMethod).toBeInstanceOf(Function);
    });

    it(`should return 'Creator: is working for Result of the concrete product 2'`, () => {
      expect(concreteCreator2.someOperation()).toBe('Creator: is working for Result of the concrete product 2');
    });
  });

  describe('clientCode', () => {
    it('should return operation for the instance of the class concreteCreator1', () => {
      expect(clientCode(new ConcreteCreator1())).toBe('Creator: is working for Result of the concrete product 1');
    });
    it('should return operation for the instance of the class concreteCreator2', () => {
      expect(clientCode(new ConcreteCreator2())).toBe('Creator: is working for Result of the concrete product 2');
    });
  });
});
