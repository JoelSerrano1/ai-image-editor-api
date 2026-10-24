import { Router } from "express";
import { PutUserController } from "../../controllers/UserController/putUserController";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { userHelper } from "../../helpers/userHelper";
import { userService } from "../../service/userService";

const helper = new userHelper()
const service = new userService(helper)

const controller = new PutUserController(service)

export function putUsersRoute(router: Router) {
    router.put("/v1/users", new UserMiddleware().run, controller.run.bind(controller))
}       