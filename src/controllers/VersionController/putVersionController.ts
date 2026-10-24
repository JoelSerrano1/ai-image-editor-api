import { Request, Response } from "express"
import { versionService } from "../../service/versionService"
import { VersionNotFound } from "../../errors/version/versionNotFound"
import { VersionBadRequest } from "../../errors/version/versionBadRequest"

export class PutVersionController {

    constructor(private readonly versionService: versionService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {

            const version = req.body

            const newVersion = await this.versionService.updateVersion(version.id, version.canvas, version.id_proyecto, version.created_at)

            return res.status(200).json({
                ok: true,
                data: newVersion
            })
        } catch (e) {
            if (e instanceof VersionNotFound) return res.status(404).send()
            if (e instanceof VersionBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }

}
