//function to make post request to the server to log out
function logOut() {


    axios.get('/log-out').then(() => { visitorLogedIn() }).catch(err => console.log(err))
    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', '/log-out', true);
    // xhr.send();

}

//makes the popUp appear
function popUp() {
    var popUp = document.querySelector('#pop-up');
    popUp.classList.toggle('invisible')
}



const arrow = document.querySelector("i.arrow-down");
const logOutElem = document.querySelector("a #log-out");
const makeServer = document.querySelector("#open-server");
const sideMenuHamburger = document.querySelector("#side-menu-hamburger");
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

function removeMakeServer() {
    makeServer.classList.add("invisible");
}

function disableSideMenu() {
    sideMenuHamburger.classList.add("invisible");
}


//functions to be executed to show things for when a user is loged in
function userLogedIn() {
    showLogOut();
}

//functions to be executed to show things for a visitor when he is loged in
function visitorLogedIn() {
    showArrow();
    removeMakeServer();
    disableSideMenu();
}