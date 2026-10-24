import { Request, Response } from "express"
import { userService } from "../../service/userService"
import { UserNotFound } from "../../errors/user/userNotFound"
import { UserBadRequest } from "../../errors/user/userBadRequest"

export class DeleteUserController {

    constructor(private readonly userService: userService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {

            const { id } = req.params

            const deletedUser = await this.userService.deleteUser(id as string)


            return res.status(200).json({
                ok: true,
                data: deletedUser
            })
        } catch (e) {
            if (e instanceof UserNotFound) return res.status(404).send()
            if (e instanceof UserBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }

}