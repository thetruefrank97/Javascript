"use strict";
//set initial count
let count = 0;
//select value and buttons
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
        const styles = event.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        }
        else if (styles.contains("increase")) {
            count++;
        }
        else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "#222";
        }
        value.textContent = count.toString();
    });
});
