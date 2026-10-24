import { Router } from "express";
import { PutVersionController } from "../../controllers/VersionController/putVersionController";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { versionHelper } from "../../helpers/versionHelper";
import { versionService } from "../../service/versionService";

const helper = new versionHelper()
const service = new versionService(helper)

const controller = new PutVersionController(service)

export function putVersionRoute(router: Router) {
    router.put("/v1/version", new UserMiddleware().run, controller.run.bind(controller))
}
