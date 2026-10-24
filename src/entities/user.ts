import { Entity } from "./entity"


export class User implements Entity {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly email: string,
        readonly password: string
    ) { }

    getPrimitive() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password
        }
    }

    static create(id: string, name: string, email: string, password: string): User {
        return new User(id, name, email, password)
    }

    update(name: string, email: string, password: string): User {
        return new User(
            this.id,
            name,
            email,
            password
        )
    }

}