import {Weather} from "./weather";
import {UI} from "./ui";

//Init weather object
const weather = new Weather("Merida");
const ui = new UI();

document.addEventListener("DOMContentLoaded",getWeather);

//Change location event
document.getElementById("w-change-btn")!.addEventListener("click", (event)=>{
    const city = (<HTMLInputElement>document.getElementById("city")).value;
    weather.changeLocation(city);

    const modal = document.querySelector(".modal");
    const modalBackdrop=document.querySelector(".modal-backdrop");


    // Get and display weather
    getWeather();

    //Close modal
    modal!.classList.remove("show");
    modalBackdrop!.classList.remove("show");

})


function getWeather() {
    weather.getWeather()
        .then(response => {
            ui.paint(response);
        })
        .catch(error => {
            console.log(error);
        })
}


