
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
chatText.onkeydown = function (evt) {
    if (evt.key === "Enter" && evt.shiftKey) {
        // chatText.value += "<br>";
        return;
    }
    if (evt.key === "Enter") {
        submit.click();
        socket.emit('stopTyping', { roomID });
    }


}

var socket = io.connect();

chatText.addEventListener('keypress', (evt) => {
    var handle;
    if (username) {
        handle = username;
    }
    else {
        handle = "visitor";
    }
    if (evt.key != "Enter")
        socket.emit("typing", {
            roomID,
            handle,
        });
});

function changeText() {
    var handle;
    if (username) {
        handle = username;
    }
    else {
        handle = "visitor";
    }
    var text = chatText.value;
    if (text === "") {
        console.log("I came here");
        socket.emit("stopTyping", {
            roomID,
        });
    }
}
submit.addEventListener("click", () => {
    console.log("I fucking came here");
    var handle;
    if (username) {
        handle = username;
    }
    else {
        handle = "visitor";
    }
    // console.log(chatText.value);
    socket.emit('stopTyping', { roomID });
    socket.emit("chat", {
        roomID: roomID,
        message: chatText.value,
        handle,
    });
    chatText.value = '';
})


socket.on("chat", (data) => {
    if (data.roomID === roomID) {
        console.log("data.roomID is:" + data.roomID + "roomID is " + roomID);
        status.innerHTML = "";
        chatOutput.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>'
        updateScroll();
    }
});

socket.on("typing", (data) => {
    if (data.roomID === roomID)
        status.innerHTML = "" + data.handle + " is typing";
});


socket.on("stopTyping", data => {
    if (data.roomID === roomID)
        status.innerHTML = "";
})