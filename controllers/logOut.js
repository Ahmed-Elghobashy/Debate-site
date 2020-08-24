const chatServer = require('../models/server');
async function logOutController(req, res) {
    res.cookie('jwt', '', { maxAge: -1 });
    console.log("I came funcking here");
    const chatServers = await chatServer.find().catch((err) => console.log(err));
    res.render('home', { username: "", role: "viewer", _id: "", chatServers });
}

module.exports = logOutController;