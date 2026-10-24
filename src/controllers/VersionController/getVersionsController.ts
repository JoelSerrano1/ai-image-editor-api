import { Request, Response } from "express"
import { versionService } from "../../service/versionService"
import { VersionBadRequest } from "../../errors/version/versionBadRequest"

export class GetVersionsController {

    constructor(private readonly versionService: versionService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const versions = await this.versionService.findVersions()

            return res.status(200).json(versions)
        } catch (e) {
            if (e instanceof VersionBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }

}
