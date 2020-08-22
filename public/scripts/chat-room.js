
//makes  the chat scroll down with the messages
var output = document.querySelector("#output");
output.scrollTop = output.scrollHeight;
function updateScroll() {
    output.scrollTop = output.scrollHeight;
}


const chatText = document.querySelector('#chat-text');
const status = document.querySelector('#status');
const chatOutput = document.querySelector('#chat-text-output');
const submit = document.querySelector('#chat-text-container input[type="submit"');
const roomID = document.querySelector('#container').getAttribute("data-roomID");
const username = document.querySelector('#container').getAttribute("data-username");
var socket = io.connect();


//Intializes the handle based on the user status which is saved in data-user in the container div
var handle;
if (username) {
    handle = username;
}
else {
    handle = "visitor";
}

//I don't know why I made these two functions but it works so I won't mess with them 

chatText.onkeydown = function (evt) {
    if (evt.key === "Enter" && evt.shiftKey) {
        return;
    }
    if (evt.key === "Enter") {
        evt.preventDefault();
        submit.click();
        socket.emit('stopTyping', { roomID });
    }


}

//This method is to emit the typing status when the user is typing
chatText.addEventListener('keypress', (evt) => {
    if (evt.key != "Enter")
        socket.emit("typing", {
            roomID,
            handle,
        });
});


//#########################


function changeText() {
    var text = chatText.value;
    if (text === "") {
        console.log("I came here");
        socket.emit("stopTyping", {
            roomID,
        });
    }
}
submit.addEventListener("click", () => {
    socket.emit('stopTyping', { roomID });
    socket.emit("chat", {
        roomID: roomID,
        message: chatText.value,
        handle,
    });
    chatText.value = '';
})

//Deals with the message recived

socket.on("chat", (data) => {
    if (data.roomID === roomID) {
        console.log("data.roomID is:" + data.roomID + "roomID is " + roomID);
        status.innerHTML = "";
        chatOutput.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>'
        updateScroll();
    }
});

//tells the other users  that he is typing
socket.on("typing", (data) => {
    if (data.roomID === roomID)
        status.innerHTML = "" + data.handle + " is typing";
});

//To remove the "typing" status when the other guy stops writing
socket.on("stopTyping", data => {
    if (data.roomID === roomID)
        status.innerHTML = "";
})