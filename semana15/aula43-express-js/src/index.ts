import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { countries } from "./data"
import { country } from "./types";

const app: Express = express();
app.use(express.json());
app.use(cors());

// a função express() inicia a aplicação web com express
// os .use() ativam os módulos de Bodyparser e Cors

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
})

// 1 - BUSCAR TODOS OS PAÍSES - Fazer um Map e mostrar apenas ID e Name

app.get('/countries', (req: Request, res: Response) => {
    // res.status(200).send(countries)
    try {
        const result = countries.map(country => ({
            id: country.id,
            name: country.name
          }))

        if (result) {
            res.send(result)
        } else {
            throw new Error("Erro - Não encontrado")
        }

    } catch (error: any) {
        res.status(400).send(error.message)
    }

})

// app.get('/test', (req: Request, res: Response) => {
//     res.send("Teste sucesso X!")
// })

// 2 - Endpoint 2 - Buscar país por id

app.get('/countries/:id', (req: Request, res: Response) => {
    // res.status(200).send(countries)
    try {
        const result: country | undefined = countries.find(
            country => country.id === Number(req.params.id)
            )

        if (result) {
            res.status(200).send(result)
        } else {
            throw new Error("Erro - Não encontrado")
        }

    } catch (error: any) {
        res.status(404).send("Not found")
    }

})
