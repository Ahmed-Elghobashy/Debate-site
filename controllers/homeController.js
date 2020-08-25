const chatServer = require("../models/server.js");
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const verifyUserToken = require('./verifyUserToken.js')

async function homeController(req, res) {
    const { _id, role } = verifyUserToken(req);
    var username = null;
    const chatServer = await chatServer.find().catch((err) => console.log(err));
    const user = User.findById(_id).then(result => {
        if (result)
            username = result.username;
        res.render("home", { chatServers, _id, role, username });
    })
}

// async function getServers() {
//     const chatServers = await chatServer.find().catch((err) => console.log(err));
//     return chatServer;
// }

module.exports = homeController;