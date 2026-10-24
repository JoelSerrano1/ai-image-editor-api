import { Entity } from "./entity"

export enum rol {
    PROPIETARIO,
    EDITOR,
    LECTOR
}


export class Proyecto_Usuario implements Entity {
    constructor(
        readonly id: string,
        readonly id_proyecto: string,
        readonly id_usuario: string,
        readonly rol: rol,
    ) { }

    getPrimitive() {
        return {
            id: this.id,
            id_proyecto: this.id_proyecto,
            id_usuario: this.id_usuario,
            rol: this.rol,
        }
    }

    static create(id: string, id_proyecto: string, id_usuario: string, rol: rol): Proyecto_Usuario {
        return new Proyecto_Usuario(id, id_proyecto, id_usuario, rol)
    }

    update(id_proyecto: string, id_usuario: string, rol: rol): Proyecto_Usuario {
        return new Proyecto_Usuario(
            this.id,
            id_proyecto,
            id_usuario,
            rol,
        )
    }

}