export class UI{
    private profile:any;
    constructor(){
        this.profile = document.getElementById("profile");
    }

    //Display profile and UI
   public showProfile(user:any){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                        <div class="col-md-3">
                            <img class="img-fluid mb-2" src="${user.avatar_url}">
                            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                        </div>
                        <div class="col-md-9">
                            <span class="badge badge-primary">Public repos:${user.public_repos}</span>
                            <span class="badge badge-secondary">Public Gists:${user.public_gists}</span>
                            <span class="badge badge-success">Followers:${user.followers}</span>
                            <span class="badge badge-info">Following:${user.following}</span>
                            <br><br>
                            <ul class="list-group">
                                <li class="list-group-item">Company: ${user.company}</li>
                                <li class="list-group-item">Website/Blog: ${user.blog}</li>
                                <li class="list-group-item">Location: ${user.location}</li>
                                <li class="list-group-item">Member Since: ${user.created_at}</li>
                            </ul>
                        </div>
                   </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `
    }

    //show alert message
    public showAlert(message:string,className:string){

        //Clear any remaining alerts
        this.clearAlert();

        //Create div
        const div = document.createElement("div");

        //Add classes
        div.className = className;

        //Add text
        div.appendChild(document.createTextNode(message));

        //get parent
        const container = document.querySelector(".searchContainer");

        //Get searchBox
        const search = document.querySelector(".search");

        //insert alert
        container?.insertBefore(div,search);

        //Timeout after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        },3000);

    }

    // Clear alert message
    public clearAlert(){
        const currentAlert = document.querySelector(".alert");

        if(currentAlert){
            currentAlert.remove();
        }
    }

    //clear profile
    public clearProfile(){
        this.profile.innerHTML = "";
    }

}
