import * as taskService from '../services/taskService.js';

function parseBool(incoming) {
	if (incoming === undefined)
		return undefined
	if (incoming.toLowerCase() === 'true')
		return true
	if (incoming.toLowerCase() === 'false')
		return false
}

export async function getTasks(req, res, next) {
	let options = {
		complete : parseBool(req.query.completed)
	}
  const tasks = await taskService.getAllTasks(options);
  res.json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
