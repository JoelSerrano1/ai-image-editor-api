import { Router } from "express";
import { GetVersionController } from "../../controllers/VersionController/getVersionController";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { versionHelper } from "../../helpers/versionHelper";
import { versionService } from "../../service/versionService";

const helper = new versionHelper()
const service = new versionService(helper)

const controller = new GetVersionController(service)

export function getVersionRoute(router: Router) {
    router.get("/v1/version/:id", new UserMiddleware().run, controller.run.bind(controller))
}
