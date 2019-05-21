//go to JSONplaceholder.typicode.com
//.then = promises
//routes = http end points

const http = new easyHTTP();

//GET POSTS
// http.get("http://jsonplaceholder.typicode.com/posts/", function(err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

const data = { title: "Custom Post", body: "This is a custom post" };
//CREATE POST
// http.post("http://jsonplaceholder.typicode.com/posts/", data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

//PUT REQUEST "UPDATE"
// http.put("http://jsonplaceholder.typicode.com/posts/5", data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

//DELETE REQUEST
// http.delete("http://jsonplaceholder.typicode.com/posts/5", function(
//   err,
//   response
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });
