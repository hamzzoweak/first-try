document.querySelector("#button").addEventListener("click", loadData);

function loadData() {
  //CREATE AN XHR OBJECT
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "may16.txt", true);

  xhr.onload = function() {
    console.log("READYSTATE", xhr.readyState);
    if (this.status === 200) {
      //   console.log(this.responseText);
      document.getElementById("output").innerHTML = `<h1>${
        this.responseText
      }</h1>`;
    }
  };

  xhr.send();

  //HTTP STATUSES
  // 200 = "OK"
  // 403 = "FORBIDDEN"
  // 404 = "NOT FOUND"

  //ReadyState Values
  // 0 = "request not initialized"
  // 1 = "server connection established"
  // 2 = "request received"
  // 3 = "processing request"
  // 4 = "request finished and reponse is ready"

  xhr.onerror = function() {
    console.log("Request error!");
  };
}
