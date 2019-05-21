let asd;
asd = 18;
console.log(asd);
let pass = "you can vote";
let fail = "you cannot vote";
let over = "over age";

if (asd >= 50) {
  console.log(over);
} else if (asd >= 18) {
  console.log(pass);
} else {
  console.log(fail);
}

//FUNCTION DECLERATION
function greet(FirstName = "John", LastName = "Doe") {
  if (typeof FirstName === "undeFIned") {
    FirstName = "John";
  } else if (typeof LastName === "undeFined") {
    LastName = "Doe";
  }
  return "Hello " + FirstName + " " + LastName;
}

console.log(greet());

//FUNCTION EXPRESSION
const square = function(x = 3) {
  return x * x;
};

console.log(square());

//IMMIDIATLEY INVOCABLE FUCNTION EXPRESSIONS = IIFE
(function() {
  console.log("asd");
})();

//PROPERTY METHODS
const todo = {
  add: function() {
    console.log("Add to do...");
  },
  edit: function(id) {
    console.log(`Edit to do ${id}`);
  }
};
todo.add();
todo.edit(55);

todo.delete = function() {
  console.log("Delete to do.... ");
};

todo.delete();

//FOR LOOP
let query = 10;

for (let i = 0; i < query; i++) {
  if (i === 2) {
    console.log("gasd");
  }
  if (i === 5) {
    console.log("stop the loop");
    break;
  }
  console.log(`number ${i}`);
}

//WHILE LOOP
let i = 0;

while (i < query) {
  console.log("Number " + i);
  i++;
}

//DO WHILE LOOP

let y = 0;
do {
  console.log("Numberssss " + y++);
} while (y < 21);

//LOOP with ARRAY

const cars = ["Ford", "Chevy", "Mazda", "Toyota", "Honda"];

for (let is = 0; is < cars.length; is++) {
  console.log(cars[is]);
}

//FOR EACH LOOP

cars.forEach(function(car, index, array) {
  console.log(`${index} : ${car}`);
  console.log(array);
});

//MAP
const users = [
  { id: 1, name: "john" },
  { id: 2, name: "sarah" },
  { id: 3, name: "karen" },
  { id: 4, name: "steve" }
];
const ids = users.map(function(User) {
  return User.name;
});

console.log(ids);

//FOR IN LOOP
const user1 = {
  fName: "John",
  lName: "doe",
  age: 36
};

for (let p in user1) {
  console.log(`${p} : ${user1[p]}`);
}
