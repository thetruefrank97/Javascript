import {GitHub} from "./github";
import {UI} from "./ui"
// search input
const searchUser = document.getElementById("searchUser");
 const github = new GitHub();
 const ui = new UI();

//Search input event listener
searchUser?.addEventListener("keyup",(event:any)=> {

    const userText = event.target.value;

    if(userText !== ""){

        github.getUser(userText)
            .then(data => {
                if(data.profile.message === "Not Found"){
                    //show alert
                    ui.showAlert("User not found","alert alert-danger")
                }else{
                    //Show profile
                    ui.showProfile(data.profile);
                }
            })
    }else{
        //Clear profile
        ui.clearProfile();
    }
});
