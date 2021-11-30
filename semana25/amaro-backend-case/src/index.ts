import { app } from './controller/app'
import { getAllProducts } from './controller/getAllProducts'
import { connection } from './data/connection'
import { Product } from './entities/Product'


app.get("/products", getAllProducts)

app.post("/products", async (req, res) => {
  try {
    const { name, tags } = req.body

   if (typeof name !== "string") {
      res.statusCode = 422
      throw new Error("Parâmetro 'name' deve ser do tipo 'string'")
    }

    if (typeof tags !== "string") {
      res.statusCode = 422
      throw new Error("Parâmetro 'tags' deve ser do tipo 'string'")
    }

    const [product] = await connection("amaro_products").where({name})

    if(product){
      res.statusCode = 409
      throw new Error("Produto já cadastrado")
    }

    const newProduct = new Product(name, tags)

    await connection.raw(`
    INSERT INTO amaro_products (name, tags)
    VALUES (
      "${newProduct.getName()}",
      "${newProduct.getTags()}"
    )
  `)

    res.status(201).send("Produto criado!")
  } catch (error: any) {

    if (res.statusCode === 200) {
      res.status(500).send("Algo deu errado. Para mais informações, veja: https://documenter.getpostman.com/view/9731983/UVBzopvQ")

    } else {
      res.send(error.message)
    }
  }
})
