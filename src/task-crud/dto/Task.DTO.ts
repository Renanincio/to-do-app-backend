export type TaskDTO = {
  id?: string;
  task_code?: string;
  title: string;
  description: string;
  date: string;
  completed?: boolean;
  favorite?: boolean;
  userId?: string;
};
