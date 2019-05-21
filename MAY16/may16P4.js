//GO TO www.icndb.com/api
//select the  Fetching multiple random jokes
//get the URL

//ES6
// document.querySelector(".get-joke").addEventListener("click", getJokes);

// const getJokes = () => {
//   const number = document.querySelector('input[type="number"]').value;
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", `http://api.icnb.com/jokes/random//${number}`, true);
//   xhr.onload = () => {
//     if (this.status === 200) {
//       const response = JSON.parse(this.responseText);

//       let output = "";
//     }
//   };
//   xhr.send();
// };

//ES5
// document.querySelector(".get-joke").addEventListener("click", getJokes);

// function getJokes(e) {
//   const number = document.querySelector('input[type="number"]').value;
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", `http://api.icnb.com/jokes/random/${number}`, true);
//   xhr.onload = function() {
//     if (this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       // console.log(response);
//       let output = "";
//       if (response.type === "success") {
//         response.value.foreEach(function(joke) {
//           output += `<li>${joke.joke}</li>`;
//         });
//       } else {
//         output += "<li>Something went wrong</li>";
//       }
//       document.querySelector("joke").innerHTML = output;
//     }
//   };
//   xhr.send();
// }
