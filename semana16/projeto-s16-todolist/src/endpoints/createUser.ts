import { Request, Response } from "express";
import insertUser from "../data/insertUser";


export default async function createUser(
    req: Request,
    res: Response

){
    try {
        // validar entradas da requisição

        if(
            !req.body.name || 
            !req.body.nickname ||
	        !req.body.email
            
        ){ 
            res
            .status(400)
            .send("Preencha os campos NAME, NICKNAME e E-MAIL")

            return
         }

        // consultar o banco de dados
        // Vou chamar a função insertUser passando nome, nickname e email
         const id: string = Date.now() + Math.random().toString()

         await insertUser(
            id,
            req.body.name,
            req.body.nickname,
	        req.body.email
         )

        // validar as saídas do banco
        // Não precisa validar as SAÍDAS porque não houveram saídas

        // responder a requisição
            res
            .status(200)
            .send("Sucesso, usuário criado!")
        
    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }

}