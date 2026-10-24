import { Router } from "express";
import { PutProyectoController } from "../../controllers/ProyectoController/putProyectoController";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { proyectoHelper } from "../../helpers/proyectoHelper";
import { proyectoService } from "../../service/proyectoService";
import { versionHelper } from "../../helpers/versionHelper";
import { versionService } from "../../service/versionService";

const helper = new proyectoHelper()
const vHelper = new versionHelper()

const vService = new versionService(vHelper)
const service = new proyectoService(helper, vService)

const controller = new PutProyectoController(service)

export function putProyectoRoute(router: Router) {
    router.put("/v1/proyecto", new UserMiddleware().run, controller.run.bind(controller))
}
