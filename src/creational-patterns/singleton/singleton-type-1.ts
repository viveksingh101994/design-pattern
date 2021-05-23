export class SingletonType1 {
  private static instance: SingletonType1;
  public static getInstance(): SingletonType1 {
    if (!SingletonType1.instance) {
      SingletonType1.instance = new SingletonType1();
    }
    return SingletonType1.instance;
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public someMethod(): void {
    console.log('test');
  }
}
