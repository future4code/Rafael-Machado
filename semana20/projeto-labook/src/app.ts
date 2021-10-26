import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

export const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server rodando na porta 3003")
})