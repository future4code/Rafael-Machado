import { connection } from "../data/connection"
import { insertProduct } from "../data/insertProduct"
import { Product } from "./entities/Product"

export const createProductLogic = async (
  name:string,
  tags:string
)=>{

  if (typeof name !== "string") {
    // res.statusCode = 422
    throw new Error("Parâmetro 'name' deve ser do tipo 'string'")
  }

  if (typeof tags !== "string") {
    // res.statusCode = 422
    throw new Error("Parâmetro 'tags' deve ser do tipo 'string'")
  }

  const [product] = await connection("amaro_products").where({ name })

  if (product) {
    // res.statusCode = 409
    throw new Error("Produto já cadastrado")
  }

  const newProduct = new Product(name, tags)

  await insertProduct(newProduct)

}