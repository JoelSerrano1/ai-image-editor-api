import { Request, Response } from "express"
import { proyectoService } from "../../service/proyectoService"
import { ProyectoBadRequest } from "../../errors/proyecto/proyectoBadRequest"

export class GetProyectosController {

    constructor(private readonly proyectoService: proyectoService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const proyectos = await this.proyectoService.findProyectos()

            return res.status(200).json(proyectos)
        } catch (e) {
            if (e instanceof ProyectoBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }

}
