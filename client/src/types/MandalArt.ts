export interface IMandalArt {
  goal: string;
  id: number;
  mandalObjects: IMandalObject[];
}

export interface IMandalObject {
  id: number;
  mission: string;
  mandalTodo: IMandalTodo[];
}

export interface IMandalTodo {
  id: number;
  object: string;
  description: string;
  score: number;
}
