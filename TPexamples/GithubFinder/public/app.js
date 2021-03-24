"use strict";
// search input
const searchUser = document.getElementById("searchUser");
//Search input event listener
searchUser === null || searchUser === void 0 ? void 0 : searchUser.addEventListener("keyup", (event) => {
    const userText = event.target.value;
    if (userText !== "") {
        console.log(userText);
    }
});
