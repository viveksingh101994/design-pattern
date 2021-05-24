# **Factory Method**

> Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created

#### **Problem**

Imagine that you’re creating a logistics management application. The first version of your app can only handle transportation by trucks, so the bulk of your code lives inside the `Truck` class.

After a while, your app becomes pretty popular. Each day you receive dozens of requests from sea transportation companies to incorporate sea logistics into the app.

#### **Solution**

The Factory Method pattern suggests that you replace direct object construction calls (using the new operator) with calls to a special factory method. Don’t worry: the objects are still created via the new operator, but it’s being called from within the factory method. Objects returned by a factory method are often referred to as products.

#### **Applicability**

- Use the Factory Method when you don’t know beforehand the exact types and dependencies of the objects your code should work with
- Use the Factory Method when you want to provide users of your library or framework with a way to extend its internal components
- Use the Factory Method when you want to save system resources by reusing existing objects instead of rebuilding them each time

#### **Pros and Cons**

| Pros                                                                                                                                     | Cons                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| You avoid tight coupling between the creator and the concrete products.                                                                  | The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern. The best case scenario is when you’re introducing the pattern into an existing hierarchy of creator classes. |
| Single Responsibility Principle. You can move the product creation code into one place in the program, making the code easier to support |                                                                                                                                                                                                                                 |
| Open/Closed Principle. You can introduce new types of products into the program without breaking existing client code.                   |                                                                                                                                                                                                                                 |
