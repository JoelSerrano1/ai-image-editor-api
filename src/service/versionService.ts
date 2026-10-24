import { Version } from "../entities/version";
import { VersionNotFound } from "../errors/version/versionNotFound";
import { versionHelper } from "../helpers/versionHelper";
import { VersionBadRequest } from "../errors/version/versionBadRequest";


export class versionService {

    constructor(private readonly helper: versionHelper) { }

    async findVersionById(id: string): Promise<Version> {

        const version = await this.helper.findVersionById(id)

        if (!version) {
            throw new VersionNotFound(`The version with id ${id} can't be reach`)
        }

        return version

    }

    async findLastVersionByProyectoId(id_proyecto: string): Promise<Version | null> {
        return this.helper.findLastVersionByProyectoId(id_proyecto)
    }

    async findVersions(): Promise<Version[]> {
        return this.helper.findVersions()
    }

    async createVersion(id: string, canvas: string, id_proyecto: string, created_at: Date): Promise<Version> {
        try {
            const lastVersion = await this.helper.findLastVersionByProyectoId(id_proyecto)

            if (lastVersion) {
                const oldVersion = lastVersion.updateUltimo(false)
                await this.helper.updateVersion(oldVersion)
            }

            const version = Version.create(id, canvas, id_proyecto, created_at, true)
            return await this.helper.createVersion(version)
        } catch (error) {
            throw new VersionBadRequest("Can't create version")
        }
    }

    async updateVersion(id: string, canvas: string, id_proyecto: string, created_at: Date): Promise<Version> {

        const existingVersion = await this.findVersionById(id)

        try {
            const updatedVersion = existingVersion.update(canvas, id_proyecto, created_at, existingVersion.ultimo)
            await this.helper.updateVersion(updatedVersion)
            return updatedVersion
        } catch (error) {
            throw new VersionBadRequest("Can't update version")
        }
    }

    async deleteVersion(id: string): Promise<Version> {

        const deletedVersion = await this.findVersionById(id)

        try {
            await this.helper.deleteVersion(id)
            return deletedVersion
        } catch (error) {
            throw new VersionBadRequest("Can't delete version")
        }
    }

}