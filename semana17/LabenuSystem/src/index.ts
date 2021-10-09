import app from './app'
import { Request, Response } from 'express'
import connection from './connection'


// app.post("/user", createUser)

// app.get("/user/:id", getUserById)

// app.post("/user/edit/:id", editUser)

// app.put("/task", createTask)

// app.get("/task/:id", getTaskById)

enum TIPO_TURMA {
   INTEGRAL = "integral",
   NOTURNO = "noturno"
}

type criaTurmaInput = {
   id: number,
   nome: string,
   data_inicio: string,
   data_fim: string,
   modulo: number,
   tipo: TIPO_TURMA
}


app.post("/turma", async (req: Request, res: Response) => {
   let errorCode = 400

   try {
      const input: criaTurmaInput = {
         id: req.body.id,
         nome: req.body.nome,
         data_inicio: req.body.data_inicio,
         data_fim: req.body.data_fim,
         modulo: 0,
         tipo: req.body.tipo
      }

      if (!input.id || !input.nome || !input.data_inicio 
         || !input.data_fim || !input.tipo ) {
         errorCode = 422
         throw new Error("Preencha os campos corretamente")
      }
      
      if(input.tipo !== TIPO_TURMA.INTEGRAL && input.tipo !== TIPO_TURMA.NOTURNO) {
         errorCode = 422
         throw new Error("Os valores possíveis são 'integral ou 'noturno'")
      }

      if(input.tipo === TIPO_TURMA.NOTURNO) {
         input.nome = input.nome+="-na-night"
      }

      await connection.raw (`
         INSERT INTO TURMA (id, nome, data_inicio, data_fim, modulo)      
         VALUES (
            ${input.id},
            "${input.nome}",
            "${input.data_inicio}",
            "${input.data_fim}",
             ${input.modulo}  
         )
      `)
          res.status(201).send({ message: "Turma criada com sucesso!" })  
      
   } catch (error: any) {
      res.status(errorCode).send({ message: error.message })
   }

})

