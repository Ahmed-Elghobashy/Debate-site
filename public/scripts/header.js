//function to make post request to the server to log out
function logOut() {

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/log-out', true);
    xhr.send();
    showArrow();
}
function popUp() {
    var popUp = document.querySelector('#pop-up');
    popUp.classList.toggle('invisible')
}