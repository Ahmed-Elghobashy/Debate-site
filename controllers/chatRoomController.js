const verifyUserToken = require('./verifyUserToken');

function chatRoomController(req, res) {
    const { username, _id, role } = verifyUserToken(req);
    const Roomid = req.params.id;
    res.render("chat-room", { Roomid, username, _id, role });
}

module.exports = chatRoomController;