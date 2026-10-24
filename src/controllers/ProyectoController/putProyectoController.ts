import { Request, Response } from "express"
import { proyectoService } from "../../service/proyectoService"
import { ProyectoNotFound } from "../../errors/proyecto/proyectoNotFound"
import { ProyectoBadRequest } from "../../errors/proyecto/proyectoBadRequest"

export class PutProyectoController {

    constructor(private readonly proyectoService: proyectoService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {

            const proyecto = req.body

            const newProyecto = await this.proyectoService.updateProyecto(proyecto.id, proyecto.name, proyecto.estado)

            return res.status(200).json({
                ok: true,
                data: newProyecto
            })
        } catch (e) {
            if (e instanceof ProyectoNotFound) return res.status(404).send()
            if (e instanceof ProyectoBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }

}
