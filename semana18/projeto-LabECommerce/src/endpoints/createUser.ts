import { Request, Response } from "express";
import { UserDatabase } from "../data/users/UserDataBase";
import { User } from "../entities/User";
import { IdGenerator } from "../services/IdGenerator";


export const createUser = async (req: Request, res: Response) => {
    try {
        const {name, email, age} = req.body
        const id = new IdGenerator().execute()
        const database = new UserDatabase()

        const newUser = new User (
            id,
            name,
            email,
            age
        )

        const findEmail = await database.getUserByEmail(email)
        if(findEmail) throw new Error("Email already exists")

        await database.createUser(newUser)

       

        res.status(201).send({newUser})

    } catch (error: any) {
        res.status(500).send({message: error.message})
        
    }
}

