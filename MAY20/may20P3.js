//INIT GITHUB or GET GITHUB
const github = new Github();

//INIT Ui
const ui = new Ui();

//SEARCH INPUT
const searchUser = document.getElementById("searchUser");

//SEARCH INPUT EVENT LISTENER
searchUser.addEventListener("keyup", e => {
  //GET INPUT TEXT
  const userText = e.target.value;
  if (userText !== "") {
    // console.log(userText);
    github.getUser(userText).then(data => {
      //   console.log(data);
      if (data.profile.message === "Not Found") {
        //SHOW ALERT
        ui.showAlert("User not found", "alert alert-danger");
        ui.clearProfile();
      } else {
        //SHOW PROFILE
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //CLEAR PROFILE
    ui.clearProfile();
  }
});
