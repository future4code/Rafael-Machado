import { Request, Response } from "express"
import { getAllProductsLogic } from "../business/getAllProducts"

export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Number(req.query.id)
    const name = String(req.query.name || "%")
    const tags = String(req.query.tags || "%")

    let result = await getAllProductsLogic(id, name as string, tags as string)

    res.send(result)

  } catch (error) {
    console.log(error)
    res.status(500).send("algo deu errado. Para mais informações, veja: https://documenter.getpostman.com/view/9731983/UVBzopvQ")
  }

}