import { app } from './controller/app'
import { createProduct } from './controller/createProduct'
import { getAllProducts } from './controller/getAllProducts'


app.get("/products", getAllProducts)

app.post("/products", createProduct)
