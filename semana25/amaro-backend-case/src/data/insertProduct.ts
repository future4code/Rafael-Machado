import { Product } from "../business/entities/Product"
import { connection } from "./connection"

export const insertProduct = async (
  newProduct: Product
): Promise<void> => {
  
  await connection.raw(`
    INSERT INTO amaro_products (name, tags)
    VALUES (
      "${newProduct.getName()}",
      "${newProduct.getTags()}"
    )
  `)
}