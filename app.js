const express = require("express");
const socket = require("socket.io");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

//requiring models
const chatServer = require("./models/server.js");
const User = require("./models/user.js");

//requiring controller
const onSocketConnection = require("./controllers/socketController.js");
const homeController = require('./controllers/homeController');
const signInController = require('./controllers/signInController');
const logOutController = require("./controllers/logOut.js");


//routes  require
const serverRoute = require("./routes/server/serverRoute");
//socket set up
var server = null;
var io = null;

//express app
const app = express();
var port = process.env.PORT || 3005;

//connecting to the database
const mongoose = require("mongoose");
const createUser = require("./controllers/createUser.js");
const dbURL =
  "mongodb+srv://Test_user:test123@cluster0.kqn3h.mongodb.net/Chat-app?retryWrites=true&w=majority";

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server = app.listen(port, () => {
      console.log("now listening ");
    });
    io = socket(server);
    onSocketConnection(io);
  })
  .catch((err) => console.log(err));
//view engine
app.set("view engine", "ejs");

//static &middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//##########################


//handling post requests
app.post("/sign-up", createUser);

app.post("/sign-in", signInController);

app.get('/log-out', logOutController);


//routes

app.use(serverRoute);

app.get("/", (req, res) => {
  res.redirect('/');
})
app.get("/home", homeController);

app.get("/sign-up", (req, res) => {
  res.render("sign-up", {
    errors: {
      username: "",
      email: "",
      password: "",
    },
    username: "",
    email: "",
  });
});

app.get("/sign-in", (req, res) => {
  res.render("sign-in", { error: "" });
});

app.use((req, res) => {
  res.send("error 404 not found");
});


app.post('/server/login', (req, res) => {
  console.log(req.body);
})