import { Request, Response } from "express"
import { userService } from "../../service/userService"
import { UserNotFound } from "../../errors/user/userNotFound"
import { UserBadRequest } from "../../errors/user/userBadRequest"

export class GetUserController {

    constructor(private readonly userService: userService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {

            const { id } = req.params


            const user = await this.userService.findUserById(id as string)


            return res.status(200).json({
                ok: true,
                data: user
            })
        } catch (e) {
            if (e instanceof UserNotFound) return res.status(404).send()
            if (e instanceof UserBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }

}