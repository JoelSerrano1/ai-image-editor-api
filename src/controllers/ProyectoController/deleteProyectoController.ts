import { Request, Response } from "express"
import { proyectoService } from "../../service/proyectoService"
import { ProyectoNotFound } from "../../errors/proyecto/proyectoNotFound"
import { ProyectoBadRequest } from "../../errors/proyecto/proyectoBadRequest"

export class DeleteProyectoController {

    constructor(private readonly proyectoService: proyectoService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {

            const { id } = req.params

            const deletedProyecto = await this.proyectoService.deleteProyecto(id as string)


            return res.status(200).json({
                ok: true,
                data: deletedProyecto
            })
        } catch (e) {
            if (e instanceof ProyectoNotFound) return res.status(404).send()
            if (e instanceof ProyectoBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }

}
