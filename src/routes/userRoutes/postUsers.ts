import { Router } from "express";
import { PostUserController } from "../../controllers/UserController/postUserController";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { userHelper } from "../../helpers/userHelper";
import { userService } from "../../service/userService";

const helper = new userHelper()
const service = new userService(helper)

const controller = new PostUserController(service)

export function postUsersRoute(router: Router) {
    router.post("/v1/users", new UserMiddleware().run, controller.run.bind(controller))
}       