import { Request, Response } from "express";
import moment from "moment"
import insertTask from "../data/insertTask";
import insertUser from "../data/insertUser";

export default async function createTask(
    req: Request,
    res: Response

){
    try {
        // validar entradas da requisição
        if(
           !req.body.title ||
           !req.body.description ||
           !req.body.limitDate ||
           !req.body.creatorUserId 
        ){
            res.status(400).send({
                message: '"title", "description", "limitDate" e "creatorUserId" são obrigatórios'
            })

            return
        }

        const dateDiff: number = moment(req.body.limitDate, "DD/MM/YYY").unix() - moment().unix()
      

        if(dateDiff <= 0){
            res.status(400).send({
                message: 'limitDate deve ser uma data futura!'
            })

            return
        }

        // consultar o banco de dados
        const id: string = Date.now() + Math.random().toString()

        await insertTask(
            id,
            req.body.title,
            req.body.description,
            moment(req.body.limitDate, "DD/MM/YYY").format("YYYY-MM-DD"),
            req.body.creatorUserId 
        )

        // validar as saídas do banco >> NÃO HOUVERAM SAÍDAS DO BANCO

        // responder a requisição
        res
        .status(200)
        .send({
            message: "Sucesso, tarefa criada!",
            id,
            limitDate: req.body.limitDate
        
        })
        
    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }

}