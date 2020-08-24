const Server = require('../models/server');
const JWT = require('jsonwebtoken');
const e = require('express');

async function auth(req, res) {
    const { password, roomID } = req.body;
    const url = '/server/' + roomID;
    const room = await Server.findById(roomID).catch(err => console.log(err));
    if (room) {
        if (password === room.password) {
            const token = JWT.sign({ authServer: roomID }, "MyPass");
            res.cookie('jwt_server', token, { httpOnly: true, maxAge: 3000 * 1000 });
            res.redirect(url);
        }
        else {
            res.redirect('/');
        }
    }

}

module.exports = auth;