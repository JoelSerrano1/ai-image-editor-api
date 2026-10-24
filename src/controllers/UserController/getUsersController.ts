import { Request, Response } from "express"
import { userService } from "../../service/userService"
import { UserBadRequest } from "../../errors/user/userBadRequest"

export class GetUsersController {

    constructor(private readonly userService: userService) { }

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const users = await this.userService.findUsers()

            return res.status(200).json(users)
        } catch (e) {
            if (e instanceof UserBadRequest) return res.status(400).send()

            return res.status(500).send()
        }
    }

}