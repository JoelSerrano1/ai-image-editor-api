import { Proyecto } from "../entities/proyecto";
import { ProyectoNotFound } from "../errors/proyecto/proyectoNotFound";
import { proyectoHelper } from "../helpers/proyectoHelper";
import { ProyectoBadRequest } from "../errors/proyecto/proyectoBadRequest";
import { versionService } from "./versionService";
import { v4 } from "uuid";


export class proyectoService {

    constructor(private readonly helper: proyectoHelper, private readonly versionService?: versionService) { }

    async findProyectoById(id: string): Promise<Proyecto> {

        const proyecto = await this.helper.findProyectoById(id)

        if (!proyecto) {
            throw new ProyectoNotFound(`The proyecto with id ${id} can't be reach`)
        }

        return proyecto

    }

    async findProyectos(): Promise<Proyecto[]> {
        return this.helper.findProyectos()
    }

    async createProyecto(id: string, nombre: string, estado: any): Promise<Proyecto> {
        try {
            const proyecto = Proyecto.create(id, nombre, estado)
            return await this.helper.createProyecto(proyecto)
        } catch (error) {
            throw new ProyectoBadRequest("Can't create proyecto")
        }
    }

    async updateProyecto(id: string, nombre: string, estado: any): Promise<Proyecto> {

        const existingProyecto = await this.findProyectoById(id)

        try {
            const updatedProyecto = existingProyecto.update(nombre, estado)
            await this.helper.updateProyecto(updatedProyecto)

            if (this.versionService) {
                const lastVersion = await this.versionService.findLastVersionByProyectoId(id)
                const canvas = lastVersion ? lastVersion.canvas : ""
                await this.versionService.createVersion(v4(), canvas, id, new Date())
            }

            return updatedProyecto
        } catch (error) {
            throw new ProyectoBadRequest("Can't update proyecto")
        }
    }

    async deleteProyecto(id: string): Promise<Proyecto> {

        const deletedProyecto = await this.findProyectoById(id)

        try {
            await this.helper.deleteProyecto(id)
            return deletedProyecto
        } catch (error) {
            throw new ProyectoBadRequest("Can't delete proyecto")
        }
    }

}