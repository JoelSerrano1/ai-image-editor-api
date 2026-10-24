import { Router } from "express";
import { PostVersionController } from "../../controllers/VersionController/postVersionController";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { versionHelper } from "../../helpers/versionHelper";
import { versionService } from "../../service/versionService";

const helper = new versionHelper()
const service = new versionService(helper)

const controller = new PostVersionController(service)

export function postVersionRoute(router: Router) {
    router.post("/v1/version", new UserMiddleware().run, controller.run.bind(controller))
}
