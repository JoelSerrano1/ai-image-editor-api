import { Helper } from "./helper";
import { VersionModel } from "../model/version.model";
import { EntitySchema } from "typeorm";
import { Version } from "../entities/version";


export class versionHelper extends Helper<Version> {

    getEntitySchema(): EntitySchema<Version> {
        return VersionModel
    }

    async findVersionById(id: string): Promise<Version | null> {
        return (await this.getRepository()).findOneBy({ id })
    }

    async findLastVersionByProyectoId(id_proyecto: string): Promise<Version | null> {
        return (await this.getRepository()).findOne({ where: { id_proyecto: id_proyecto, ultimo: true } })
    }

    async findVersions(): Promise<Version[]> {
        return (await this.getRepository()).find()
    }

    async createVersion(version: Version): Promise<Version> {
        return (await this.getRepository()).save(version)
    }

    async updateVersion(version: Version): Promise<Version> {
        return (await this.getRepository()).save(version)
    }

    async deleteVersion(id: string): Promise<void> {
        await (await this.getRepository()).delete({ id })
    }

}