import app from './app'
import { Request, Response } from 'express'
import connection from './connection'

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

type criaEstudanteInput = {
   id: number,
   nome: string,
   email: string,
   data_nasc: string,
   hobbies: string[],
   turma_id: number
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

app.post("/estudante", async (req: Request, res: Response) => {
   let errorCode = 400

   try {
      const input: criaEstudanteInput = {
         id: req.body.id,
         nome: req.body.nome,
         email: req.body.email,
         data_nasc: req.body.data_nasc,
         hobbies: req.body.hobbies,
         turma_id: req.body.turma_id
      }

      if (!input.id || !input.nome || !input.email || !input.data_nasc 
         || input.hobbies.length < 1 ) {
         errorCode = 422
         throw new Error("Preencha os campos corretamente")
      }

      await connection.raw(`
         INSERT INTO ESTUDANTE (id, nome, email, data_nasc, turma_id)
         VALUES
         (   ${input.id},
            "${input.nome}",
            "${input.email}",
            "${input.data_nasc}",
             ${input.turma_id}
         )
      `)

      for (let hobby of input.hobbies) {
         const idPassatempo = Math.floor(Math.random() * 1000000)
         await connection.raw(`
         INSERT INTO PASSATEMPO (id, nome)
         VALUES(
            ${idPassatempo},
            "${hobby}"
         )
         `)

         await connection.raw(`
         INSERT INTO ESTUDANTE_PASSATEMPO (estudante_id, passatempo_id)
         VALUES(
            ${input.id},
            ${idPassatempo}
         )
         `)
      }

      res.status(201).send({ message: "Estudante gravado com sucesso!"})

      
   } catch (error: any) {
      res.status(errorCode).send({ message: error.message })
      
   }

})

