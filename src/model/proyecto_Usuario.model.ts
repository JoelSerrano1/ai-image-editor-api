import { EntitySchema } from "typeorm"
import { Proyecto_Usuario } from "../entities/proyecto_Usuario"

export const Proyecto_UsuarioModel = new EntitySchema<Proyecto_Usuario>({
    name: "proyecto_Usuario",
    tableName: "proyecto_Usuario",
    target: Proyecto_Usuario,
    columns: {
        id: {
            type: String,
            primary: true
        },
        id_proyecto: {
            type: String
        },
        id_usuario: {
            type: String
        },
        rol: {
            type: String
        },
    }
})