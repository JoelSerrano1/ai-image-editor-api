import { Router } from "express";
import { GetUsersController } from "../../controllers/UserController/getUsersController";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { userHelper } from "../../helpers/userHelper";
import { userService } from "../../service/userService";

const helper = new userHelper()
const service = new userService(helper)

const controller = new GetUsersController(service)

export function getUsersRoute(router: Router) {
    router.get("/v1/users", new UserMiddleware().run, controller.run.bind(controller))
}       