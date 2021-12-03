import { Product } from "../business/entities/Product"
import { connection } from "./connection"

export const filterProducts = async (
  name: string,
  tags: string
):Promise<Product[]> => {

  const result = await connection("amaro_products")
    .where("name", "LIKE", `%${name}%`)
    .andWhere("tags", "LIKE", `%${tags}%`)

  return result.map(product => {
    return new Product(product.name, product.tags, product.id)
  })
}