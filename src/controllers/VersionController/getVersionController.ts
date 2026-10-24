import { Request, Response } from "express"
import { versionService } from "../../service/versionService"
import { VersionNotFound } from "../../errors/version/versionNotFound"
import { VersionBadRequest } from "../../errors/version/versionBadRequest"

export class GetVersionController {

    constructor(private readonly versionService: versionService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {

            const { id } = req.params


            const version = await this.versionService.findVersionById(id as string)


            return res.status(200).json({
                ok: true,
                data: version
            })
        } catch (e) {
            if (e instanceof VersionNotFound) return res.status(404).send()
            if (e instanceof VersionBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }

}
