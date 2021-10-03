import app from './app'
import connection from './connection'
import { Request, Response } from "express"
import createUser from './endpoints/createUser'
import getUserById from './endpoints/getUserById'
import editUser from './endpoints/editUser'
import createTask from './endpoints/createTask'


app.post("/user", createUser)

app.get("/user/:id", getUserById)

app.post("/user/edit/:id", editUser)

app.put("/task", createTask)

// Continuar no vídeo de resolução >> 1h:23m