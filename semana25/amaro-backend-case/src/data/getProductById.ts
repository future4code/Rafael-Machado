import { Product } from "../business/entities/Product"
import { connection } from "./connection"

export const getProductById = async (id: number): Promise<Product> => {
  const [result] = await connection("amaro_products")
    .where({ id })

  return new Product(result.name, result.tags, result.id)
}