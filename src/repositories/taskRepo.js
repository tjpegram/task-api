import prisma from '../config/db.js';

export async function findAll({complete}) {
	let conditions = {}
	if (complete !== undefined){
		conditions = {
			completed: complete
		}
	}
  return prisma.task.findMany({where: conditions});
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
