import { NextFunction, Response } from "express";
import { RequestInterface } from "../interface/RequestInterface";

const addNumber = (rest: number[]): number => {
  return rest.reduce((total, number) => total + number, 0);
};

class MiddleWare {
  middleFunction = (
    req: RequestInterface,
    res: Response,
    next: NextFunction
  ) => {
    try {
      req.addNumbers = addNumber([1, 2, 3, 4, 5]);
      next();
    } catch (error: any) {
      console.log(error.message);
    }
  };
}

export default MiddleWare;
