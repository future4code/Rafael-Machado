import { filterProducts } from "../data/filterProducts"
import { getProductById } from "../data/getProductById"

export const getAllProductsLogic = async (
  id: number,
  name: string,
  tags: string
) => {

  let result

  if (id) {
    // busca produtos por id
    result = await getProductById(id)
  } else {
    // busca produtos com filtros
    result = await filterProducts(name, tags)
  }

  return result
}