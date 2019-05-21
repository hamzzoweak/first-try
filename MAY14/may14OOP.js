// //PERSON CONSTRUCTOR
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   //   console.log(this);
// }

// const bob = new Person("bob", 26);
// const john = new Person("john");

// console.log(bob);

//CONSTRUCTOR AND THIS. KEYWORD
//PERSON CONSTRUCTOR
// function Person(name, dob) {
//   this.name = name;
//   this.birthday = new Date(dob);
//   this.calculateAge = function() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   };
// }

// const bob = new Person("bob", "5-13-1983");
// console.log(bob.calculateAge());

//BUILD IN CONSTRUCTOR
//String

// const name1 = "Jeff";
// const name2 = new String("Jeff");
// // name2.foo = "bar";

// console.log(name2);

// if (name2 === "Jeff") {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// //NUMBER
// const num1 = 5;
// const num2 = new Number(5);

// console.log(num2);

// const bool1 = true;
// const bool2 = new Boolean(true);

// console.log(bool2);

// const getSum = function(x, y) {
//   return x + y;
// };

// const getSum2 = new Function("x", "y", "return 1 + 1");
// console.log(getSum2());

// //OBJECT
// const john1 = { name: "John" };
// const john2 = new Object({ name: "John" });
// console.log(john1);

// //ARRAYS
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = new Array(1, 2, 33, 44, 55);

// console.log(arr2);

//PROTOTYPE EXPLAINED
//OBJECT.PROTOTYPE
//PERSON.PROTOTYPE

//PERSON CONSTRUCTOR
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = dob;
// }

// //CALCULATE AGE
// Person.prototype.calculateAge = function() {
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// };

// //GET FULL NAME
// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

// Person.prototype.getMaried = function(newLastName) {
//   this.lastName = newLastName;
// };

// const john = new Person("John", "Doe", "05-13-1983");
// const mary = new Person("Mary", "Johnson", "05-13-1980");

// console.log(mary);
// mary.getMaried("Smith");
// console.log(mary.getFullName());
// console.log(mary.hasOwnProperty("firstName"));
// console.log(mary.hasOwnProperty("getFullName"));

//PROTOTYPE INHERITANCE
//PERSON CONSTRUCTOR
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// //GREETING
// Person.prototype.greeting = function() {
//   return `Hello there ${this.firstName} ${this.lastName}`;
// };

// const person1 = new Person("john", "doe");
// console.log(person1.greeting());

// //CUSTOMER CONSTRUCTOR
// function Customer(firstName, lastName, phone, membership) {
//   Person.call(this, firstName, lastName);
//   this.phone = phone;
//   this.membership = membership;
// }

// //INHERIT THE PERSON PROTOTYPE METHOD
// Customer.prototype = Object.create(Person.prototype);

// //MAKE CUSTOMER PROTOTYPE RETURN CUSTOMER
// Customer.prototype.construtor = Customer();

// //CREATE CUSTOMER
// const customer1 = new Customer("Tom", "Smith", "123-456-789", "Standard");

// Customer.prototype.greeting = function() {
//   return `Hello there ${this.firstName} ${
//     this.lastName
//   }, welcome to our company`;
// };
// console.log(customer1.greeting());

//USING ONJECT.CREATE
// const personPrototype = {
//   greeting: function() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   },

//   getsMaried: function(newLastname) {
//     this.lastName = newLastname;
//   }
// };

// const mary = Object.create(personPrototype);
// mary.firstName = "Mary";
// mary.lastName = "Williams";
// mary.ate = 30;

// mary.getsMaried("Thompson");
// console.log(mary.greeting());

// const bob = Object.create(personPrototype, {
//   firstName: { value: "Bobby" },
//   lastName: { value: "Ferrer" },
//   age: { value: 36 }
// });

// console.log(bob);
// console.log(bob.greeting());

//
//ES6 CLASSES
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }

//   greeting() {
//     return `Hi there ${this.firstName} ${this.lastName}`;
//   }

//   calculateage() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//   getMaried(newLastName) {
//     this.lastName = newLastName;
//   }

//   static addNumbers(x, y) {
//     return x + y;
//   }
// }

// const mary = new Person("Mary", "Williams", "06-13-1983");

// mary.getMaried("Thompson");

// console.log(mary);
// console.log(Person.addNumbers(1, 2));

//SUB CLASSES
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }
  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer("John", "Doe", "123-456", "Standard");
console.log(john.greeting());
console.log(Customer.getMembershipCost());
