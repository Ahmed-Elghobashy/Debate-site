const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

async function signInController(req, res) {
    const { email, password } = req.body;
    try {
        // const user = await User.findOne({ email });
        const user = await User.login(email, password);
        const token = jwt.sign({ username: user.username, _id: user._id, role: user.role }, "MyPass");
        res.cookie("jwt", token, { httpOnly: true, maxAge: 3000 * 1000 });
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
}

module.exports = signInController;