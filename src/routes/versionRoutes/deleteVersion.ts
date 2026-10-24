import { Router } from "express";
import { DeleteVersionController } from "../../controllers/VersionController/deleteVersionController";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { versionHelper } from "../../helpers/versionHelper";
import { versionService } from "../../service/versionService";

const helper = new versionHelper()
const service = new versionService(helper)

const controller = new DeleteVersionController(service)

export function deleteVersionRoute(router: Router) {
    router.delete("/v1/version/:id", new UserMiddleware().run, controller.run.bind(controller))
}
