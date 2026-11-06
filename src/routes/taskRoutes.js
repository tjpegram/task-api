import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { validateTask, validateQuery } from '../middleware/validateTask.js';

const router = express.Router();

router.get('/', validateQuery, taskController.getTasks);
router.post('/', validateTask, taskController.createTask);

export default router;
