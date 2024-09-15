export type UserType = {
  name: string;
  password: number;
  joinDate: null | number;
  id: number;
  profilePhoto?: string;
};

export type LevelsType = {
  title: string;
  isActive: boolean;
  module_id: number;
  id: number;
};

export type ModulesType = {
  id: number;
  module: {
    id: 1;
    title: string;
  };
  title: string;
};

export type TasksType = {
  question: string;
  task_id: number;
  module_id: number
  answers: {
    one: string;
    two: string;
    three: string;
  };
  key: string;
  id: number;
};

export type GetTaskType = {
  id: number;
  level: {
    id: number;
    module: {
      id: number;
      title: string;
    };
    title: string;
  };
  question: string;
  answer: string;
  key: number;
};
