const express = require("express");
const tasksController = require("./controllers/tasksController");
const tasksMiddlewares = require("./middlewares/tasksMiddleware");

const router = express.Router();

router.get("/tasks", tasksController.getAll);

router.post(
  "/tasks",
  tasksMiddlewares.validateFields,
  tasksController.createTask
);

router.delete("/tasks/:id", tasksController.deleteTask);
router.put(
  "/tasks/:id",
  tasksMiddlewares.validateFields,
  tasksController.updateTask
);

module.exports = router;
