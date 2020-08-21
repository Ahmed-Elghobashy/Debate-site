const socket = require("socket.io")
const chatServer = require("../models/server.js");


function onSocketConnection(io) {
    io.on('connection', (socket) => {
        socketOnChat(socket, io);
        socketOnTyping(socket, io);
        socketOnStopTyping(socket, io);
    })
}

function updateTheMessageDatabase(data) {
    chatServer.findByIdAndUpdate(data.roomID, { $addToSet: { messages: [{ handle: data.handle, message: data.message }] } }, function (err, data) {
        if (err) {
            console.log(err);
        }
    });

}

function socketOnChat(socket, io) {
    socket.on('chat', data => {
        updateTheMessageDatabase(data);
        io.sockets.emit('chat', data);

    });
}

function socketOnTyping(socket, io) {
    socket.on('typing', data => {
        socket.broadcast.emit('typing', data);
    });

}

function socketOnStopTyping(socket, io) {
    socket.on("stopTyping", data => {
        socket.broadcast.emit('stopTyping', data);
    })

}

module.exports = onSocketConnection;