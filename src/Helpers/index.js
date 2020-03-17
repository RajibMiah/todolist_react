import { collatedTasks } from '../Constant';

export const collatedTasksExist = selectedProject =>
  collatedTasks.find(task => task.key === selectedProject);

