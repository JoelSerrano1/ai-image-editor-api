import { Router } from "express";
import { GetUserController } from "../../controllers/UserController/getUserController";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { userHelper } from "../../helpers/userHelper";
import { userService } from "../../service/userService";

const helper = new userHelper()
const service = new userService(helper)

const controller = new GetUserController(service)

export function getUserRoute(router: Router) {
    router.get("/v1/user/:id", new UserMiddleware().run, controller.run.bind(controller))
}