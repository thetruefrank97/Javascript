let userMonth = document.getElementById("user-month");
let userYear = document.getElementById("user-year");
let userDay = document.getElementById("user-day");

let submitButton = document.getElementById("submit-date");

submitButton.addEventListener("click", function (event) {
    let message = document.getElementById("message");
    let parsedMonth = (parseInt(userMonth.value) - 1);
    let parsedDay = parseInt(userDay.value);
    let parsedYear = parseInt(userYear.value);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date(parsedYear, parsedMonth, parsedDay);
    let weekdayIs = weekday[date.getDay()];
    let monthIs = months[parsedMonth];

    if (weekdayIs === undefined || monthIs === undefined) {
        message.innerText = "";
        setTimeout(function () {
            message.innerText = "Please enter a valid date";
        }, 500);
    } else {
        message.innerText = `${weekdayIs}, ${monthIs}, ${parsedDay}, ${parsedYear}`;
    }

});