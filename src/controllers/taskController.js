import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {

  const {
    completed = null,
  } = req.query;

  const options = {
    completed: completed === null ? null : completed.toLowerCase() === "true" ? true : false,
  };
  const tasks = await taskService.getAllTasks(options);

  res.status(200).json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
