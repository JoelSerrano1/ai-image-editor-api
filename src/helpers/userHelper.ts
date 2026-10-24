import { Helper } from "./helper";
import { UserModel } from "../model/user.model";
import { EntitySchema } from "typeorm";
import { User } from "../entities/user";


export class userHelper extends Helper<User> {

    getEntitySchema(): EntitySchema<User> {
        return UserModel
    }

    async findUserById(id: string): Promise<User | null> {
        return (await this.getRepository()).findOneBy({ id })
    }

    async findUsers(): Promise<User[]> {
        return (await this.getRepository()).find()
    }


    async createUser(user: User): Promise<User> {
        return (await this.getRepository()).save(user)
    }

    async updateUser(user: User): Promise<void> {
        await (await this.getRepository()).update(user.id, user.getPrimitive())
    }

    async deleteUser(id: string): Promise<void> {
        await (await this.getRepository()).delete(id)
    }

}