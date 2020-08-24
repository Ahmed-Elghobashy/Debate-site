const verifyUserToken = require('./verifyUserToken');
const Server = require('../models/server');
const jwt = require('jsonwebtoken');
async function chatRoomController(req, res) {
    const { username, _id, role } = verifyUserToken(req);
    console.log("username :" + username);
    const Roomid = req.params.id;
    const room = await Server.findById(Roomid);
    if (room.encrypted && role != "super admin") {
        //if he is trying to access a encrypted server from the url
        //and he doesn't have the token then he will be redirected to
        //the home page
        if (verifyServerToken(req, Roomid)) {
            console.log("came here no2");
            res.render("chat-room", { Roomid, username, _id, role });
        }
        else {
            res.redirect('/');
        }

    }
    else {
        //check if he will be a viewer or a debator
        console.log("A user came in");
        res.render("chat-room", { Roomid, username, _id, role });
    }
}

function verifyServerToken(req, roomID) {
    const token = req.cookies.jwt_server;
    var theToken;
    var flag;
    if (token) {
        //if he is just a user
        jwt.verify(token, "MyPass", (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                flag = false;
            } else {
                theToken = decodedToken;
                if (theToken.authServer === roomID) {

                    flag = true;
                }
                else {
                    flag = false;
                }
            }
        });

        return flag;

    }
}
module.exports = chatRoomController;