import { Request, Response } from "express";
import { IdGenerator } from "../services/IdGenerator";

export const createUser = (req: Request, res: Response) => {
    try {
        const {name, email, age} = req.body
        const id = new IdGenerator().execute()



    } catch (error) {
        
    }
}

