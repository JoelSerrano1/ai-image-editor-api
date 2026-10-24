import { Entity } from "./entity"

enum estado {
    EDITANDO,
    PENDIENTE,
    APROVADO,
    ARCHIVADO
}

export class Proyecto implements Entity {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly estado: estado
    ) { }

    getPrimitive() {
        return {
            id: this.id,
            name: this.name,
            estado: this.estado
        }
    }

    static create(id: string, name: string, estado: estado): Proyecto {
        return new Proyecto(id, name, estado)
    }

    update(name: string, estado: estado): Proyecto {
        return new Proyecto(
            this.id,
            name,
            estado,
        )
    }

}