import { Request, Response } from "express";
import { ProductDatabase } from "../../data/products/ProductDatabase";

export const getAllProducts = async (req: Request, res: Response) => {

    try {

        const database = new ProductDatabase()

        const result = await database.getAllProducts()

        res.status(200).send({result})
        
    } catch (error: any) {

        res.status(500).send({message: error.message}) 
        
    }

}