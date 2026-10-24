import { EntitySchema } from "typeorm"
import { IA, tipoIA } from "../entities/IA"

export const IAModel = new EntitySchema<IA>({
    name: "IA",
    tableName: "ia",
    target: IA,
    columns: {
        id: {
            type: String,
            primary: true
        },
        nombre: {
            type: String
        },
        tipo: {
            type: "int",
            enum: tipoIA
        },
        descripcion: {
            type: String
        }
    }
})
