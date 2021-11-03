import { app } from './app'
import { connection } from './data/connection'
import { Product } from './entities/Product'

// EndPoint para testarmos servidor 
//(pode e deve ser deletado na hora de entregar o case)
app.get('/ping', (req, res) => {
  try {
    res.send('pong')
  } catch (error: any) {
    console.log(error.message)
  }
})

app.get("/products", async (req, res) => {
  try {
    const id = Number(req.query.id)
    const name = req.query.name || "%"
    const tags = req.query.tags || "%"

    let result

    if (id) {
      result = await connection("amaro_products")
        .where({ id })
    } else {
      result = await connection("amaro_products")
        .where("name", "LIKE", `%${name}%`)
        .andWhere("tags", "LIKE", `%${tags}%`)
    }

    res.send(result)
  } catch (error) {
    res.status(500).send("algo deu errado. Para mais informações, veja: https://documenter.getpostman.com/view/9731983/UVBzopvQ")
  }

})

app.post("/products", async (req, res) => {
  try {
    const { name, tags } = req.body

    // sem instanciar classes:
    
    // const product = {name, tags}
    // await connection("amaro_products").insert(product)

    // instanciando classes:
    
    const product = new Product(name, tags)

    await connection.raw(`
    INSERT INTO amaro_products (name, tags)
    VALUES (
      "${product.getName()}",
      "${product.getTags()}"
    )
  `)

    res.status(201).send("Produto criado!")
  } catch (error) {
    res.status(500).send("algo deu errado. Para mais informações, veja: https://documenter.getpostman.com/view/9731983/UVBzopvQ")
  }
})