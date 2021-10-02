import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";


export default async function getUserById(
    req: Request,
    res: Response

){
    try {
        // validar entradas da requisição >>> Nesse caso não precisa fazer 
        // porque só vou receber um ID por path params 
        // e se eu deixar de passar o ID ele nem vai acessar o endpoint corretamente.

        // consultar o banco de dados
        const user = await selectUserById(req.params.id)

        if(!user){
            res.status(404).send({
                message: "Usuário não encontrado"
            })

            return
        }


        // validar as saídas do banco

        // responder a requisição
        res.status(200).send({
            id: user.id,
            nickname: user.nickname
        })
        
    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }

}