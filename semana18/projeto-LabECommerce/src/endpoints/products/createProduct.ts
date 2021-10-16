import { Request, Response } from "express";
import { ProductDatabase } from "../../data/products/ProductDatabase";
import { Product } from "../../entities/Product";
import { Ticket } from "../../entities/Ticket";
import { IdGenerator } from "../../services/IdGenerator";

export const createProduct = (req: Request, res: Response) => {

    const {name, description, price, origin, destination} = req.body

    const id = new IdGenerator().execute()

    const database = new ProductDatabase()

    const newProduct = origin && destination 
        ? new Ticket (id, name, description, price, origin, destination)
        : new Product (id, name, description, price)



}