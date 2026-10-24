import { Router } from "express";
import { GetProyectoController } from "../../controllers/ProyectoController/getProyectoController";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { proyectoHelper } from "../../helpers/proyectoHelper";
import { proyectoService } from "../../service/proyectoService";

const helper = new proyectoHelper()
const service = new proyectoService(helper)

const controller = new GetProyectoController(service)

export function getProyectoRoute(router: Router) {
    router.get("/v1/proyecto/:id", new UserMiddleware().run, controller.run.bind(controller))
}
