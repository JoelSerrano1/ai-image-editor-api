import { Router } from "express";
import { DeleteProyectoController } from "../../controllers/ProyectoController/deleteProyectoController";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { proyectoHelper } from "../../helpers/proyectoHelper";
import { proyectoService } from "../../service/proyectoService";

const helper = new proyectoHelper()
const service = new proyectoService(helper)

const controller = new DeleteProyectoController(service)

export function deleteProyectoRoute(router: Router) {
    router.delete("/v1/proyecto/:id", new UserMiddleware().run, controller.run.bind(controller))
}
