import { Request, Response } from "express";
import { ProductDatabase } from "../../data/products/ProductDatabase";
import { Product } from "../../entities/Product";
import { Ticket } from "../../entities/Ticket";
import { IdGenerator } from "../../services/IdGenerator";

export const createProduct = async (req: Request, res: Response) => {

    try {
    const {name, description, price, origin, destination} = req.body

    const id = new IdGenerator().execute()

    const database = new ProductDatabase()

    const newProduct = origin && destination 
        ? new Ticket (id, name, description, price, origin, destination)
        : new Product (id, name, description, price)

        await database.createProduct(newProduct)

        res.status(201).send({product: newProduct})

    } catch (error: any) {

        res.status(500).send({message: error.message})
        
    }

    

}