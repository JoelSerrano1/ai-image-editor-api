import  cors from "cors"
import express, { Express } from "express"
import { registerRoutes } from "./routes"
import { json } from "body-parser"


export class Server {
    private app: Express = express()

    init (port: number) {
        this.registerMiddlewares()
        this.registerRoutes()

       this.app.listen(port, () => {
        console.log(`Listening port ${port}`)
       })
    }

    private registerRoutes () {
        this.app.use(registerRoutes())
    }

    private registerMiddlewares () {
        this.app.use(cors())
        this.app.use(json())
    }
}