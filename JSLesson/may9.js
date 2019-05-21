// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;
// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].method;
// val = document.links[0].action;
// val = document.links[0].className;
// val = document.links[0].classList;
// val = document.images;
// val = document.scripts;
// val = document.scripts[1];
// val = document.scripts[1].getAttribute;
// val = document.scripts[1].getAttribute("src");

// let iskrips = document.scripts;

// let iskripsArray = Array.from(iskrips);

// iskripsArray.forEach(function(displayScripts) {
//   console.log(displayScripts);
// });

// console.log(val);

//GET THINGS FROM THE ELEMENT
// console.log(document.getElementById("task-title"));
// console.log(document.getElementById("task-title").className);

// const taskTitle = document.getElementById("task-title");

// //CHANGE STYLING
// taskTitle.style.background = "red";
// taskTitle.style.color = "#fff";
// taskTitle.style.padding = "5px";
// taskTitle.style.fontSize = "4rem";
// // taskTitle.style.display = "none";

// //CHANGE TEXT CONTENT
// taskTitle.textContent = "Task List";
// taskTitle.innerText = "My Task";
// taskTitle.innerHTML = '<span style="color: black">Task List........</span>';

// document.querySelector("li").style.color = "red";
// document.querySelector("ul li").style.color = "pink";

// document.querySelector("li:last-child").style.color = "red";
// document.querySelector("li:nth-child(3)").style.color = "yellow";
// document.querySelector("li:nth-child(odd)").style.background = "lightgreen";
// document.querySelector("li:nth-child(even)").style.background = "tomato";

// //DOCUMENT.GETelementBYclassNAME
// const items = document.getElementsByClassName("collection-item");
// console.log(items);
// console.log(items[2]);
// items[2].style.color = "blue";
// items[2].textContent = "TEST ITEM";

// const listitems = document
//   .querySelector("ul")
//   .getElementsByClassName("collection-item");

// console.log(listitems);

// //DOCUMENT.getELEMENTbyTAGname
// let lis = document.getElementsByTagName("li");

// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = "red";
// lis[0].textContent = "red";

// lis = Array.from(lis);
// lis.reverse();
// lis.forEach(function(li, index) {
//   console.log(li.className);
//   li.textContent = `${index}: Hey`;
// });

//DOCUMENT.querySELECTORall
// const itm = document.querySelectorAll("ul.collection li.collection-item");
// itm.forEach(function(item, indx) {
//   item.textContent = `${indx}: Hello`;
// });

// const liodd = document.querySelectorAll("li:nth-child(odd)");
// const lieven = document.querySelectorAll("li:nth-child(even)");

// liodd.forEach(function(li, index) {
//   li.style.background = "red";
// });

// lieven.forEach(function(li, index) {
//   li.style.background = "lightgreen";
// });

//GETTING CHILD NODES
// let val;
// const list = document.querySelector("ul.collection");
// const listItem = document.querySelector("li.collection-item:first-child");

// val = listItem;
// val = list;

// val = list.childNodes;
// val = list.childNodes[1];
// val = list.childNodes[1].nodeName;
// val = list.childNodes[1].nodeType;

// //GET CHILDREN ELEMENT NODES
// val = list.children;
// val = list.children[1];
// val = list.children[1].textContent = "TRY";

// //GET CHILDREN OF CHILDREN
// val = list.children[3].children[0].id = "test-link";
// val = list.children[3].children[0];

// //FIRST CHILD
// val = list.firstChild;
// val = list.firstElementChild;

// //LAST CHILD
// val = list.lastChild;

// //COUNT CHILD ELEMENT
// val = list.childElementCount;

// //GET PARENT NODE
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// //GET NEXT SIBLNG
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// console.log(val);

//CREATE ELEMENT
// const li = document.createElement("li");

// //ADD CLASS
// li.className = "collection-item";
// //ADD ID
// li.id = "new-item";
// //ADD ATTRIBUTE
// li.setAttribute("title", "new-ITEM");
// //CREATE TEXTNODE AND APPEND
// li.appendChild(document.createTextNode("HELLO WORLD"));

// //CREATE NEW LINK ELEMENT
// const link = document.createElement("a");
// //ADD CLASSES
// link.className = "delete-item secondary-content";
// //ADD ICON HTML
// link.innerHTML = '<i class="fa fa-trash"></i>';
// //APPEND LINK INTO LI
// li.appendChild(link);
// //APPEND LI AS CHILD TO UL
// document.querySelector("ul.collection").appendChild(li);

// console.log(li);

//REPLACE ELEMENT
//CREATE ELEMENT
// const newHeading = document.createElement("h2");
// //ADD id
// newHeading.id = "task-title";
// newHeading.appendChild(document.getElementById("task-title"));
// //GET THE OLD HEADING
// const oldHeading = document.getElementById("task-title");
// //PARENT
// const cardAction = document.querySelector(".card-action");
// //REPLACE
// cardAction.replaceChild(newHeading, oldHeading);

//REMOVE ELEMENT
// const lis = document.querySelector("li");
// const list = document.querySelector("ul");
// //REMOVE LIST ITEM
// lis[0].remove();
// //REMOVE CHILD ELEMENT
// list.removeChild(list.childNodes[3]);
// //CLASSES AND ATTRI
// const firstLi = document.querySelector("li:first-child");
// const link = firstLi.children[0];

// let val;

// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add("test");
// link.classList.remove("test");

// val = link;

// val = link.setAttribute("href");
// val = link.setAttribute("href", "http://google.com");
// link.setAttribute("title", "google");
// val = link.hasAttribute("title");
// link.removeAttribute("title");
// val = link;

// console.log(val);

//EVENT LISTENER
// document.querySelector(".clear-tasks").addEventListener("click", function(e) {
//   console.log("Hello World");
//   e.preventDefault();
// });

// document.querySelector(".clear-tasks").addEventListener("click", onClick);

// function onClick(e) {
//   let val;
//   val = e;

//   //EVENT TARGET
//   val = e.target;
//   val = e.target.id;
//   val = e.target.className;
//   val = e.target.classList;

//   val = e.type;

//   val = e.timeStamp;

//   val = e.clientY;
//   val = e.clientX;

//   val = e.offsetY;
//   val = e.offsetX;

//   e.preventDefault();
//   console.log(val);
// }

//
// const clearBtn = document.querySelector(".clear-tasks");
// const card = document.querySelector(".card");
// const heading = document.querySelector("h5");

//CLICK
// clearBtn.addEventListener("click", runEvent);
// clearBtn.addEventListener("dblclick", runEvent);
// clearBtn.addEventListener("mousedown", runEvent);
// clearBtn.addEventListener("mouseup", runEvent);
// clearBtn.addEventListener("mouseenter", runEvent);
// clearBtn.addEventListener("mouseleave", runEvent);
// clearBtn.addEventListener("mouseover", runEvent);
// clearBtn.addEventListener("mouseout", runEvent);
// clearBtn.addEventListener("mousemove", runEvent);
// card.addEventListener("mousemove", runEvent);

// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);
//   heading.textContent = `MouseX: ${e.offsetX} Mouse: ${e.offsetY}`;
//   e.preventDefault();

//   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

//SELECT AND OPTION
// const form = document.querySelector("form");
// const taskInput = document.getElementById("task");
// const heading = document.querySelector("h5");
// const select = document.querySelector("select");

//CLEAR INPUT
// taskInput.value = "";

// form.addEventListener("submit", runEvent);

// taskInput.addEventListener("keydown", runEvent);
// taskInput.addEventListener("keyup", runEvent);
// taskInput.addEventListener("keypress", runEvent);
// taskInput.addEventListener("focus", runEvent);
// taskInput.addEventListener("blur", runEvent);
// taskInput.addEventListener("cut", runEvent);
// taskInput.addEventListener("paste", runEvent);

// taskInput.addEventListener("input", runEvent);
// select.addEventListener("change", runEvent);

// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);
//   console.log(e.target.value);
//   heading.innerHTML = e.target.value;

//   //GET INPUT VALUE
//   console.log(taskInput.value);

//   e.preventDefault();
// }

//EVENT BUBBLING
// document.querySelector(".card-title").addEventListener("click", function() {
//   console.log("card=title");
// });

// document.querySelector(".card-content").addEventListener("click", function() {
//   console.log("card-content");
// });

// document.querySelector(".card").addEventListener("click", function() {
//   console.log("card");
// });

// document.querySelector(".col").addEventListener("click", function() {
//   console.log("col");
// });

// //EVENT DELIGATION
// const delitem = document.querySelector(".delete-item");
// delitem.addEventListener("click", deleteItem);
// document.body.addEventListener("click", deleteItem);

// function deleteItem(e) {
//   if (e.target.parentElement.classList.contains("delete-item")) {
//     console.log("delete item");
//     e.target.parentElement.parentElement.remove();
//   }
//   e.preventDefault();
// }

//MAY 11
//SET LOCAL STORAGE ITEM
// localStorage.setItem("name", "John");
// localStorage.setItem("age", "36");

// //SET SESSION STORAGE ITEM
// sessionStorage.setItem('name', 'JohnP');
// //REMOVE FROM LOCAL STORAGE
// localStorage.removeItem('name');
// //GET FROM STORAGE
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

//LOCAL STORAGE CLEAR
// localStorage.clear();

// console.log(name, age);

document.querySelector("form").addEventListener("submit", function(e) {
  const task = document.getElementById("task").value;

  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("Task saved");
  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach(function(task) {
  console.log(task);
});
