const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');


function login(req, res) {
    const { email, password } = req.body;
    const user = User.find({ email });
    const salt = await bcrypt.genSalt();
    const hashedPass = await bcrypt.hash(password, salt);
    if (hashedPass == user.password) {
        console.log("I came here");
    }
    jwt.sign({ user: user }, "MyPass", (err, token) => {
        res.json({
            token,
        });

    });

    //if there is user by this email
    // if (user) {

    // }
    // else {

    // }

}