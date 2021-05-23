import { SingletonType1 } from '../../src/creational-patterns/singleton/singleton-type-1';
import instanceType2, { SingletonType2 } from '../../src/creational-patterns/singleton/singleton-type-2';

describe('Singleton type 1 pattern', () => {
  let singleton: SingletonType1;
  let consoleSpy: jest.SpyInstance;
  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });
  afterAll(() => {
    consoleSpy.mockReset();
    consoleSpy.mockRestore();
  });
  it('should provide instance ', () => {
    singleton = SingletonType1.getInstance();
    expect(singleton).toBeInstanceOf(SingletonType1);
  });

  it('should provide same instance as above', () => {
    expect(SingletonType1.getInstance()).toEqual(singleton);
  });

  it('should provide someMethod to print on console', () => {
    SingletonType1.getInstance().someMethod();
    expect(console.log).toHaveBeenCalled();
    expect(consoleSpy.mock.calls[0][0]).toContain('test');
  });
});

describe('Singleton type 2 pattern', () => {
  let singleton: SingletonType2;
  let consoleSpy: jest.SpyInstance;
  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });
  afterAll(() => {
    consoleSpy.mockReset();
    consoleSpy.mockRestore();
  });
  it('should provide instance ', () => {
    singleton = instanceType2;
    expect(singleton).toBeInstanceOf(SingletonType2);
  });

  it('should provide same instance as above', () => {
    expect(instanceType2).toEqual(singleton);
  });

  it('should provide someMethod to print on console', () => {
    instanceType2.someMethod();
    expect(console.log).toHaveBeenCalled();
    expect(consoleSpy.mock.calls[0][0]).toContain('test');
  });
});
