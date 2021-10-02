import app from './app'
import connection from './connection'
import { Request, Response } from "express"
import createUser from './endpoints/createUser'
import getUserById from './endpoints/getUserById'
import editUser from './endpoints/editUser'

// 1 - ENDPOINT DE CRIAR USUÁRIO
// Método: POST
// Path: /user

app.post("/user", createUser)

app.get("/user/:id", getUserById)

app.post("/user/edit/:id", editUser)

// Continuar no vídeo de resolução >> 1h:02m