import { Router } from "express";
import { PostProyectoController } from "../../controllers/ProyectoController/postProyectoController";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { proyectoHelper } from "../../helpers/proyectoHelper";
import { proyectoService } from "../../service/proyectoService";
import { proyecto_UsuarioHelper } from "../../helpers/proyecto_UsuarioHelper";
import { proyecto_UsuarioService } from "../../service/proyecto_UsuarioService";

const helper = new proyectoHelper()
const service = new proyectoService(helper)

const HelperRelacion = new proyecto_UsuarioHelper()
const ServiceRelacion = new proyecto_UsuarioService(HelperRelacion)

const controller = new PostProyectoController(service, ServiceRelacion)


export function postProyectoRoute(router: Router) {
    router.post("/v1/proyecto", new UserMiddleware().run, controller.run.bind(controller))
}
