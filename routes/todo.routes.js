const TodoController = require("../controllers/todo.controller");
const express = require('express');

const router = express.Router();

router.post("/", TodoController.createTodo )

module.exports = router