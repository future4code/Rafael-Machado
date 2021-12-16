import { filterProducts } from "../data/filterProducts"
import { getProductById } from "../data/getProductById"

export const getAllProductsLogic = async (
  id: number,
  name: string,
  tags: string
) => {

  let result

  if (id) {
    
    result = await getProductById(id)
  } else {
   
    result = await filterProducts(name, tags)
  }

  return result
}