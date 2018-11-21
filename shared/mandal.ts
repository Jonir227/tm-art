interface IMandalTodo {
  id: string;
  object: string;
  description: string;
  score: number;
}

interface IMandalObject {
  id: string;
  mission: string;
  todo: [
    IMandalTodo,
    IMandalTodo,
    IMandalTodo,
    IMandalTodo,
    IMandalTodo,
    IMandalTodo,
    IMandalTodo,
    IMandalTodo
  ];
}

interface IMandalArt {
  id: string;
  goal: string;
  todo: [
    IMandalObject,
    IMandalObject,
    IMandalObject,
    IMandalObject,
    IMandalObject,
    IMandalObject,
    IMandalObject,
    IMandalObject
  ];
}
