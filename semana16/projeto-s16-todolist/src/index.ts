import app from './app'
import connection from './connection'
import { Request, Response } from "express"
import createUser from './endpoints/createUser'
import getUserById from './endpoints/getUserById'

// 1 - ENDPOINT DE CRIAR USUÁRIO
// Método: POST
// Path: /user

app.post("/user", createUser)

app.get("/user/:id", getUserById)

// Continuar no vídeo de resolução >> 47m:30