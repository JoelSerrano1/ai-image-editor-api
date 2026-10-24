import { Router } from "express";
import { GetProyectosController } from "../../controllers/ProyectoController/getProyectosController";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { proyectoHelper } from "../../helpers/proyectoHelper";
import { proyectoService } from "../../service/proyectoService";

const helper = new proyectoHelper()
const service = new proyectoService(helper)

const controller = new GetProyectosController(service)

export function getProyectosRoute(router: Router) {
    router.get("/v1/proyectos", new UserMiddleware().run, controller.run.bind(controller))
}
