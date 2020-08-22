//function to make post request to the server to log out
function logOut() {

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/log-out', true);
    xhr.send();
    showArrow();
}

//makes the popUp appear
function popUp() {
    var popUp = document.querySelector('#pop-up');
    popUp.classList.toggle('invisible')
}



const arrow = document.querySelector("i.arrow-down");
const logOutElem = document.querySelector("a #log-out");

//Shows the arrow and hides the logout sign (supposed to be used when the user is not logged in)
function showArrow() {
    arrow.classList.remove("invisible");
    logOutElem.classList.add("invisible");
}

//shows the log out sign instead of the pop up arrow (supposed to be used when the user is logged in)
function showLogOut() {
    arrow.classList.add("invisible");
    logOutElem.classList.remove("invisible");
}
