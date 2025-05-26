let is24hoursFormat = true;

const btnElement = document.getElementById("am-pm-toggle");
const colorSelector = document.getElementById("colorSelector");
const container = document.getElementById("container");

const theColors = ["blue", "orange", "red", "yellow", "green", ]

let index = 0;

setInterval(() => {

    // index = Math.floor(Math.random() * theColors.length);
    // index = (index + 1) % theColors.length;
    container.style.background = theColors[index]


}, 2000)





const clockFunc = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");
    const getDateString = now.toDateString();
    let ampm = ""
    let theTimeString = ""

    if (is24hoursFormat) {
        ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

    } else {
        hours = String(hours).padStart(2, "0")
        ampm = "AM"

    }


    theTimeString = `${hours} : ${minutes} : ${seconds} - ${ampm}`

    btnElement.innerText = hours >= 12 ? "change to PM" : " change to AM";
    document.getElementById("clock").textContent = theTimeString;
    document.getElementById("theDate").textContent = getDateString;


}


btnElement.addEventListener("click", () => {
    is24hoursFormat = !is24hoursFormat
    console.log(is24hoursFormat)
    clockFunc()
})



clockFunc()

setInterval(clockFunc, 1000)