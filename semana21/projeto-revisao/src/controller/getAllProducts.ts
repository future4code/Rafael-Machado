import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllProducts = async (
    req: Request, res: Response): Promise<void> => {
    try {
      const id = Number(req.query.id)
      const name = req.query.name || "%"
      const tags = req.query.tags || "%"
  
      let result
  
      if (id) {
        result = await connection("amaro_products")
          .where({ id })
      } else {
        result = await connection("amaro_products")
          .where("name", "LIKE", `%${name}%`)
          .andWhere("tags", "LIKE", `%${tags}%`)
      }
  
      res.send(result)
    } catch (error) {
      res.status(500).send("algo deu errado. Para mais informações, veja: https://documenter.getpostman.com/view/9731983/UVBzopvQ")
    }
  }