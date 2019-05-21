const http = new EasyHttp();

//GET USERS
http
  .get("https://jsonplaceholder.typicode.com/users")
  .then(data => console.log(data))
  .catch(err => console.log(err));

// USER DATA POST METHOD
const data = {
  name: "BENJOT",
  username: "johndoe",
  email: "jdoe@gmail.com"
};

http
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

//USER DATA PUT METHOD
const datas = {
  name: "POST POST",
  username: "MY POST",
  email: "mypost@gmail.com"
};
http
  .put("https://jsonplaceholder.typicode.com/users/1", datas)
  .then(data => console.log(data))
  .catch(err => console.log(err));

//USER DATA DELETE METHOD
http
  .delete("https://jsonplaceholder.typicode.com/users/5")
  .then(data => console.log(data))
  .catch(err => console.log(err));
