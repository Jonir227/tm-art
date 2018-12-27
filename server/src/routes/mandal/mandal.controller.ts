import { Request, Response } from 'express';
import { MandalArt, MandalObject, MandalTodo } from '../../entities';

// 전체 만다라트를 불러옴
export const getMandals = async (req: Request, res: Response) => {
  try{
    const [mandalArts, count] = await MandalArt.findAndCount({
      relations: ['mandalObjects', 'mandalObjects.mandalTodo'],
    });

    // 응답 shape를 맞춤
    const response = mandalArts.map(mandalArt => {
      const score = mandalArt.mandalObjects.reduce(
        (acc, mandalObj) =>
          acc +
          mandalObj.mandalTodo.reduce((accTodo, todo) => accTodo + todo.score, 0),
        0,
      );
      delete mandalArt.mandalObjects;
      return { ...mandalArt, score };
    });

    res.json({
      count,
      mandalArts: response,
    });
  } catch(err) {
    res.status(503).json({
      message: 'Internal Server Error',
    });
  }
};

export const getMandal = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const mandalArt = await MandalArt.findOne(
      { id },
      {
        relations: ['mandalObjects', 'mandalObjects.mandalTodo'],
      },
    );

    if (!mandalArt) {
      res.status(404).json({
        message: 'cannot find mandal Art',
      });
      return;
    }

    res.json({
      mandalArt,
    });
  } catch(err) {
    res.status(503).json({
      message: 'Internal Server Error',
    });
  }
};

interface IMandalCreateRequest extends Request {
  goal?: string;
}

export const putMandal = async (req: IMandalCreateRequest, res: Response) => {
  const { goal } = req.body;
  const mandal = await new MandalArt();
  // 골이 없다면 에러를 리턴
  if (!goal) {
    return res.status(403).json({
      message: 'cannot create mandal without goal',
    });
  }
  mandal.goal = goal;
  mandal.save();
  // 만달 오브젝트 생성
  const objs = [];
  for (let i = 0; i < 8; i++) {
    const obj = await new MandalObject().save();
    obj.mandalArt = mandal;
    // 만달 TODO 생성
    const todos = [];
    for (let j = 0; j < 8; j++) {
      const todo = new MandalTodo();
      todo.mandalObject = obj;
      await todo.save();
      todos.push(todo);
    }
    obj.mandalTodo = todos;
    await obj.save();
    objs.push(obj);
  }
  mandal.mandalObjects = objs;
  await mandal.save();

  const returnVal = await MandalArt.findOne(
    { id: mandal.id },
    {
      relations: ['mandalObjects', 'mandalObjects.mandalTodo'],
    },
  );

  res.json({
    mandalArt: returnVal,
  });
};
