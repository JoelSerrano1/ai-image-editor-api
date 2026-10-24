import { Request, Response } from "express"
import { IAService } from "../../service/IA/iaService"

export class GetIasController {

    constructor(private readonly iaService: IAService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const ias = await this.iaService.findIas()

            return res.status(200).json(ias)
        } catch (e) {
            return res.status(500).send()
        }
    }

}
