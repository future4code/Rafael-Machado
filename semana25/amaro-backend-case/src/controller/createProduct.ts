import { Request, Response } from "express"
import { createProductLogic } from "../business/createProduct"

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, tags } = req.body

    await createProductLogic(name, tags)

    res.status(201).send("Produto criado!")
  } catch (error: any) {

    if (res.statusCode === 200) {
      res.status(500).send("algo deu errado. Para mais informações, veja: https://documenter.getpostman.com/view/9731983/UVBzopvQ")
    } else {
      res.send(error.message)
    }
  }
}