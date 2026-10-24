import { EntitySchema } from "typeorm"
import { Version } from "../entities/version"

export const VersionModel = new EntitySchema<Version>({
    name: "version",
    tableName: "version",
    target: Version,
    columns: {
        id: {
            type: String,
            primary: true
        },
        canvas: {
            type: String
        },
        id_proyecto: {
            type: String
        },
        created_at: {
            type: Date
        },
        ultimo: {
            type: Boolean
        }
    }
})