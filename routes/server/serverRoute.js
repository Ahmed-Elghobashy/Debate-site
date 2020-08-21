const { Router } = require('express');
const createChatServer = require("../../controllers/create-server.js");
const chatRoomController = require("../../controllers/chatRoomController");
const router = Router();

router.post("/server/create", createChatServer);

router.get("/server/:id", chatRoomController);

module.exports = router;
