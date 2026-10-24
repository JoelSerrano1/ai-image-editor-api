import { Request, Response } from "express"
import { userService } from "../../service/userService"
import { UserNotFound } from "../../errors/user/userNotFound"
import { UserBadRequest } from "../../errors/user/userBadRequest"
import { v4 } from "uuid"

export class PostUserController {

    constructor(private readonly userService: userService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {

            const user = req.body

            const newUser = await this.userService.createUser(v4(), user.nombre, user.email, user.contrasenya, user.tipo)


            return res.status(200).json({
                ok: true,
                data: newUser
            })
        } catch (e) {
            if (e instanceof UserNotFound) return res.status(404).send()
            if (e instanceof UserBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }

}