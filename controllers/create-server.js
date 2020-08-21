const chatServer = require("../models/server.js");

function createChatServer(req, res) {
  const reqFormBody = req.body;
  const serverEncrypted = reqFormBody.password;
  var serverToBeCreated;
  if (serverEncrypted)
    serverToBeCreated = new chatServer({
      name: reqFormBody.name,
      premise: reqFormBody.premise,
      encrypted: true,
      password: reqFormBody.password,
    });
  else {
    serverToBeCreated = new chatServer({
      name: reqFormBody.name,
      premise: reqFormBody.premise,
      encrypted: false,
    });
  }
  try {

    serverToBeCreated.save().then(() => {
      res.redirect("/");
    });
  }
  catch (err) {
    console.log(err);
    alert("Error while creating server");
  }
}

module.exports = createChatServer;
