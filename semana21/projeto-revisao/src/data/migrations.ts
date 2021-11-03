import { connection } from "./connection"
import products from "./products.json"

const main = async () => {

  try {
    await connection.raw(`
      CREATE TABLE IF NOT EXISTS amaro_products (
        id INT PRIMARY KEY AUTO_INCREMENT,
          name VARCHAR(255) NOT NULL,
          tags VARCHAR(255)
      );
   `)

    console.log("Tabela criada!")
  
    products.forEach((product: any)=>{
      product.tags = product.tags[0]
    })

    await connection("amaro_products").insert(products)

  } catch (error) {
    console.log(error)
  } finally{
    connection.destroy()
  }
}

main()