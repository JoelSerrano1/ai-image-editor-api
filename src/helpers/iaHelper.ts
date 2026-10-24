import { Helper } from "./helper";
import { IAModel } from "../model/ia.model";
import { EntitySchema } from "typeorm";
import { IA, tipoIA } from "../entities/IA";


export class iaHelper extends Helper<IA> {

    getEntitySchema(): EntitySchema<IA> {
        return IAModel
    }

    async findIaByTipo(tipo: tipoIA): Promise<IA> {
        const ia = await (await this.getRepository()).findOneBy({ tipo })
        if (!ia) {
            throw new Error("IA not found")
        }
        return ia
    }

    async findIas(): Promise<IA[]> {
        return (await this.getRepository()).find()
    }

}