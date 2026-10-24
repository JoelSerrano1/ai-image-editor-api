import { User } from "../entities/user";
import { UserNotFound } from "../errors/user/userNotFound";
import { userHelper } from "../helpers/userHelper";
import { UserBadRequest } from "../errors/user/userBadRequest";


export class userService {

    constructor(private readonly helper: userHelper) { }

    async findUserById(id: string): Promise<User> {

        const user = await this.helper.findUserById(id)

        if (!user) {
            throw new UserNotFound(`The user with id ${id} can't be reach`)
        }

        return user

    }

    async findUsers(): Promise<User[]> {
        return this.helper.findUsers()
    }

    async createUser(id: string, nombre: string, email: string, contrasenya: string): Promise<User> {
        try {
            const user = User.create(id, nombre, email, contrasenya)
            return await this.helper.createUser(user)
        } catch (error) {
            throw new UserBadRequest("Can't create user")
        }
    }

    async updateUser(id: string, nombre: string, email: string, contrasenya: string): Promise<User> {

        const existingUser = await this.findUserById(id)

        try {
            const updatedUser = existingUser.update(nombre, email, contrasenya)
            await this.helper.updateUser(updatedUser)
            return updatedUser
        } catch (error) {
            throw new UserBadRequest("Can't update user")
        }
    }

    async deleteUser(id: string): Promise<User> {

        const deletedUser = await this.findUserById(id)

        try {
            await this.helper.deleteUser(id)
            return deletedUser
        } catch (error) {
            throw new UserBadRequest("Can't delete user")
        }
    }

}