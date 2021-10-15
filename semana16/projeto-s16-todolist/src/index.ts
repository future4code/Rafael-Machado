import app from './app'
import createUser from './endpoints/createUser'
import getUserById from './endpoints/getUserById'
import editUser from './endpoints/editUser'
import createTask from './endpoints/createTask'
import getTaskById from './endpoints/getTaskById'


app.post("/user", createUser)

app.get("/user/:id", getUserById)

app.post("/user/edit/:id", editUser)

app.put("/task", createTask)

app.get("/task/:id", getTaskById)

// Continuar no vídeo de resolução >> 1h:23m