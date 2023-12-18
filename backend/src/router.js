const express = require("express");
const tasksController = require("./controllers/tasksController");
const tasksMiddlewares = require("./middlewares/tasksMiddleware");

const router = express.Router();

router.get("/tasks", tasksController.getAll);

router.post(
  "/tasks",
  tasksMiddlewares.validateBody,
  tasksController.createTask
);

router.delete("/tasks/:id", tasksController.deleteTask);

module.exports = router;
