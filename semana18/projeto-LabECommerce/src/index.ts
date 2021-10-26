import app from './app'
import { createUser } from './endpoints/createUser'
import { getAllUsers } from './endpoints/getAllUsers'
import { createProduct } from './endpoints/products/createProduct'
import { getAllProducts } from './endpoints/products/getAllProducts'

app.get("/users", getAllUsers)

app.post("/users", createUser)

app.get("/products", getAllProducts)

app.post("/products", createProduct)