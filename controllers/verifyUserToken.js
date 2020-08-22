//verifies the User Log in token and returns the User id and the role
const jwt = require("jsonwebtoken");

function verifyUserToken(req) {
    const token = req.cookies.jwt;
    var _id, role;
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
        _id = theToken._id;
        role = theToken.role;
    }
    else {
        console.log("User without email signed in");
        role = "viewer";
    }
    return { _id, role };
}

module.exports = verifyUserToken;