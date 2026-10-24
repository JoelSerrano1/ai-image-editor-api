import { Request, Response } from "express"
import { IAService } from "../../service/IA/iaService"

export class PostIaController {

    constructor(private readonly iaService: IAService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const body = req.body
            const { tipo } = body

            if (tipo === undefined || tipo === null) {
                return res.status(400).send("Missing 'tipo' in body")
            }

            const imageBuffer = await this.iaService.generate(tipo, body)

            res.setHeader('Content-Type', 'image/png')
            return res.status(200).send(imageBuffer)
        } catch (e) {
            return res.status(500).send((e as Error).message)
        }
    }

}
