import { Request, Response } from 'express';
import { MandalArt } from '../../entities';

export const getMandals = async (req: Request, res: Response) => {
  const mandalArts = await MandalArt.find();
  res.json({
    mandalArts,
  });
};

export const putMandal = async (req: Request, res: Response) => {
  const mandal = new MandalArt();
  mandal.save();
  res.json({
    mandal,
  });
};
