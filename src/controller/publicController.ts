import { Request, Response } from "express";
import { RequestInterface } from "../interface/RequestInterface";
import poolConnection from "../config/connectDb";
class PublicController {
  public indexController = async (req: RequestInterface, res: Response): Promise<void> => {
    const [result, _] = await poolConnection.execute('INSERT INTO ts (username, password) VALUES (?, ?)', ['jean', '456'])
    console.log(result)
    res.send("hello world andro");
  };
}

export default PublicController;
