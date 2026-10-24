import { Router } from "express";
import { DeleteUserController } from "../../controllers/UserController/deleteUserController";
import { userHelper } from "../../helpers/userHelper";
import { userService } from "../../service/userService";

const helper = new userHelper()
const service = new userService(helper)

const controller = new DeleteUserController(service)

export function deleteUsersRoute(router: Router) {
    router.delete("/v1/users/:id", controller.run.bind(controller))
}       