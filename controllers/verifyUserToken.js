//verifies the User Log in token and returns the User id and the role
const jwt = require("jsonwebtoken");

function verifyUserToken(req) {
    const token = req.cookies.jwt;
    var _id, role, username;
    var theToken;
    if (token) {
        //if he is just a user
        jwt.verify(token, "MyPass", (err, decodedToken) => {
            if (err) {
                console.log(err.message);
            } else {
                theToken = decodedToken;
            }
        });


        username = theToken.username;
        _id = theToken._id;
        role = theToken.role;
    }
    else {
        role = "viewer";
    }
    return { username, _id, role };
}

module.exports = verifyUserToken;