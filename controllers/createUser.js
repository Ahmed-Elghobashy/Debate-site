const User = require("../models/user");

async function createUser(req, res) {
    console.log(req.body);
    const { username, email, password } = req.body;

    try {
        console.log(username, email, password);
        const user = await User.create({ username, email, password });
        res.status(201).json(user);
    }
    catch (err) {
        const errors = handleError(err);
        // console.log(errors);
        console.log(err);
        res.status(401).send(errors);
    }
}

function handleError(err) {
    let errors = { username: '', email: '', password: '' };

    if (err.code === 11000) {
        if (err.message.includes("username_1 dup key"))
            errors.username = 'that username is already used';
        else if (err.message.includes("email_1 dup key"))
            errors.email = 'that email is already registered';
        return errors;
    }

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;


}

module.exports = createUser;
