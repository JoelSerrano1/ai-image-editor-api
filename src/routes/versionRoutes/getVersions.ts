import { Router } from "express";
import { GetVersionsController } from "../../controllers/VersionController/getVersionsController";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { versionHelper } from "../../helpers/versionHelper";
import { versionService } from "../../service/versionService";

const helper = new versionHelper()
const service = new versionService(helper)

const controller = new GetVersionsController(service)

export function getVersionsRoute(router: Router) {
    router.get("/v1/versions", new UserMiddleware().run, controller.run.bind(controller))
}
