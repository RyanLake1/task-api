import prisma from '../config/db.js';

export async function findAll({completed}) {
  console.log("COPMLETEN:");
  console.log(completed);
  const conditions = {};
  if (completed != null) {
    conditions.OR = [
      { completed },
    ];
  }
  console.log("CONDItIONS:");
  console.log(conditions);
  const tasks = await prisma.task.findMany({
    where: conditions,
  });
  return tasks;
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
