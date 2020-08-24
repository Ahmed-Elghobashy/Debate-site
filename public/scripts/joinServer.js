function joinServer(roomID, encrypted) {
    //Check to see if the server is encrypted ,by sending a post request
    //or not and if the user has authentication token
    if (encrypted === 'true') {
        const serverLoginModal = document.querySelector('#server-login-modal');
        const roomIDinput = document.querySelector('#server-login input[type="hidden"]');
        roomIDinput.setAttribute('value', roomID);
        serverLoginModal.setAttribute('style', 'display:block;');
    }
    else {
        const url = '/server/' + roomID;
        window.location.href = url;
        // var xmlHTTP = new XMLHttpRequest();
        // xmlHTTP.open('GET', url, true);
        // xmlHTTP.send();
    }
}