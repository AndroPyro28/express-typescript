import { Request, Response } from "express";
import { RequestInterface } from "../interface/RequestInterface"; // we could use interface or types extending request
import { yes } from "../types/yes"; // we could use interface or types extending request
import poolConnection from "../config/connectDb";

class PublicController {
  
  public indexController = async (req: yes, res: Response): Promise<void> => {
    const [result, _] = await poolConnection.execute('INSERT INTO ts (username, password) VALUES (?, ?)', ['jean', '456'])
    req.addNumbers
    console.log(result)
    res.status(200).json({name: 'andro', age: 50});
  };
}

export default PublicController;
