export interface IMandalArtFront {
  id: number;
  goal: string;
  score: number;
}
export interface IMandalArt {
  id: number;
  goal: string;
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
