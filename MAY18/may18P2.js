// document.querySelector("#button1").addEventListener("click", getText);
// document.querySelector("#button2").addEventListener("click", getJSON);
// document.querySelector("#button3").addEventListener("click", getExternal);

// function getText() {
//   fetch("sample.txt")
//     .then(function(res) {
//       //   console.log(res.text());
//       return res.text();
//     })
//     .then(function(data) {
//       console.log(data);
//       document.querySelector("#output").innerHTML = data;
//     })
//     .catch(function(rej) {
//       console.log(rej);
//     });
// }

// function getJSON() {
//   fetch("posts.json")
//     .then(function(res) {
//       return res.json();
//     })
//     .then(function(data) {
//       let output = "";
//       data.forEach(function(post) {
//         output += `<li>${post.title}, ${post.body}</li>`;
//       });
//       document.querySelector("#output").innerHTML = output;
//     })
//     .catch(function(rej) {
//       console.log(rej);
//     });
// }

// function getExternal() {
//   fetch("https://api.github.com/users")
//     .then(function(res) {
//       return res.json();
//     })
//     .then(function(data) {
//       let output = "";
//       data.forEach(function(user) {
//         output += `<li>${user.login}</li>`;
//       });
//       document.querySelector("#output").innerHTML = output;
//     })
//     .catch(function(rej) {
//       console.log(rej);
//     });
// }

//
//ES6 SYNTAX
const getText = () => {
  fetch("sample.txt")
    .then(res => res.text())
    .then(data => (document.querySelector("#output").innerHTML = data))
    .catch(rej => console.log(rej));
};

const getJSON = () => {
  fetch("posts.json")
    .then(res => res.json())
    .then(data => {
      let output = "";
      data.forEach(post => (output += `<li>${post.title}, ${post.body}</li>`));
      document.querySelector("#output").innerHTML = output;
    })
    .catch(rej => console.log(rej));
};

const getExternal = () => {
  fetch("https://api.github.com/users")
    .then(res => res.json())
    .then(data => {
      let output = "";
      data.forEach(user => (output += `<li>${user.login}</li>`));
      document.querySelector("#output").innerHTML = output;
    })
    .catch(rej => console.log(rej));
};

document.querySelector("#button1").addEventListener("click", getText);
document.querySelector("#button2").addEventListener("click", getJSON);
document.querySelector("#button3").addEventListener("click", getExternal);
