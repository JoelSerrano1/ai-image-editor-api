import { EntitySchema } from "typeorm"
import { Proyecto } from "../entities/proyecto"

export const ProyectoModel = new EntitySchema<Proyecto>({
    name: "proyecto",
    tableName: "proyecto",
    target: Proyecto,
    columns: {
        id: {
            type: String,
            primary: true
        },
        name: {
            type: String
        },
        estado: {
            type: String
        },
    }
})