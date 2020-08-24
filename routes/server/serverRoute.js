const { Router } = require('express');
const createChatServer = require("../../controllers/create-server.js");
const chatRoomController = require("../../controllers/chatRoomController");
const serverAuth = require("../../controllers/serverAuthController.js")
const router = Router();

router.post("/server/create", createChatServer);

router.get("/server/:id", chatRoomController);

router.post("/server/login", serverAuth)

module.exports = router;
