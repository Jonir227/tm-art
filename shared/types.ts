interface IMandalTodo {
  object: string;
}

interface IMandalObject {
  object: string;
  todo: IMandalTodo[];
}

interface IMandalArt {
  mission: string;
  todo: IMandalObject[];
}