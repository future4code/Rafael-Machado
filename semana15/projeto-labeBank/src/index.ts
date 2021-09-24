import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { accounts } from "./accounts"
// import { clienteType } from "./types";

const app: Express = express();
app.use(express.json());
app.use(cors());

// a função express() inicia a aplicação web com express
// os .use() ativam os módulos de Bodyparser e Cors

app.post("/users/create", (req: Request, res: Response) => {
  try {
    const {name, cpf, dateOfBirthAsString } = req.body

    const [day, month, year] = dateOfBirthAsString.split("/")

    const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)

    accounts.push({
      name,
      cpf,
      dateOfBirth,
      balance: 0,
      statement: []

    })
      res.status(201).send("Conta foi criada!")
  } catch (error: any) {
    console.log(error)
    res.status(400).send(error.message)
  }
})






























// app.get("/users", (req: Request, res: Response) => {
//     try {
//     //   let type = req.query.type as string
//       let search = req.query.search as string
  
    //   if (type) {
    //     type = type.toUpperCase()
  
    //     if (type in USER_ROLES) {
    //       const result = users.filter(user => user.type === type)
    //       return res.status(200).send(result)
    //     }
  
    //     throw new Error("Invalid type")
    //   }
  
  //     if (search) {
  //       search = search.toLowerCase()
  
  //       const result = users.filter(
  //         user => user.name.toLowerCase().includes(search)
  //       )
  
  //       console.log(result, search)
  
  //       if (result.length === 0) {
  //         return res.status(204).send("No user was found")
  //       }
        
  //       return res.status(200).send(result)
  //     }
  
  //     res.status(200).send(users)
  //   } catch (error: any) {
  //     res.status(400).send(error.message)
  //   }
  // })




























// 1 - BUSCAR TODOS OS PAÍSES - Fazer um Map e mostrar apenas ID e Name

// app.get('/clientes', (req: Request, res: Response) => {
//     // res.status(200).send(countries)
//     try {
//         const result = clientes.map(cliente => ({
//             id: country.id,
//             name: country.name
//           }))

//         if (result) {
//             res.send(result)
//         } else {
//             throw new Error("Erro - Não encontrado")
//         }

//     } catch (error: any) {
//         res.status(400).send(error.message)
//     }

// })

// app.get('/test', (req: Request, res: Response) => {
//     res.send("Teste sucesso X!")
// })

// 2 - Endpoint 2 - Buscar país por id

// app.get('/countries/:id', (req: Request, res: Response) => {
//     // res.status(200).send(countries)
//     try {
//         const result: country | undefined = countries.find(
//             country => country.id === Number(req.params.id)
//             )

//         if (result) {
//             res.status(200).send(result)
//         } else {
//             throw new Error("Erro - Não encontrado")
//         }

//     } catch (error: any) {
//         res.status(404).send("Not found")
//     }

// })


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
})
