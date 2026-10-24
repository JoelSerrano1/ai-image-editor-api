import { Helper } from "./helper";
import { ProyectoModel } from "../model/proyecto.model";
import { EntitySchema } from "typeorm";
import { Proyecto } from "../entities/proyecto";


export class proyectoHelper extends Helper<Proyecto> {

    getEntitySchema(): EntitySchema<Proyecto> {
        return ProyectoModel
    }

    async findProyectoById(id: string): Promise<Proyecto | null> {
        return (await this.getRepository()).findOneBy({ id })
    }

    async findProyectos(): Promise<Proyecto[]> {
        return (await this.getRepository()).find()
    }

    async createProyecto(proyecto: Proyecto): Promise<Proyecto> {
        return (await this.getRepository()).save(proyecto)
    }

    async updateProyecto(proyecto: Proyecto): Promise<Proyecto> {
        return (await this.getRepository()).save(proyecto)
    }

    async deleteProyecto(id: string): Promise<void> {
        await (await this.getRepository()).delete({ id })
    }

}