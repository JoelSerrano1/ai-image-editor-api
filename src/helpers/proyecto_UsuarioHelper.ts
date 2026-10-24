import { Helper } from "./helper";
import { Proyecto_UsuarioModel } from "../model/proyecto_Usuario.model";
import { EntitySchema } from "typeorm";
import { Proyecto_Usuario } from "../entities/proyecto_Usuario";


export class proyecto_UsuarioHelper extends Helper<Proyecto_Usuario> {

    getEntitySchema(): EntitySchema<Proyecto_Usuario> {
        return Proyecto_UsuarioModel
    }

    async findProyecto_UsuarioById(id: string): Promise<Proyecto_Usuario | null> {
        return (await this.getRepository()).findOneBy({ id })
    }

    async findProyecto_Usuarios(): Promise<Proyecto_Usuario[]> {
        return (await this.getRepository()).find()
    }

    async createProyecto_Usuario(proyecto_Usuario: Proyecto_Usuario): Promise<Proyecto_Usuario> {
        return (await this.getRepository()).save(proyecto_Usuario)
    }

    async updateProyecto_Usuario(proyecto_Usuario: Proyecto_Usuario): Promise<Proyecto_Usuario> {
        return (await this.getRepository()).save(proyecto_Usuario)
    }

    async deleteProyecto_Usuario(id: string): Promise<void> {
        await (await this.getRepository()).delete({ id })
    }

}