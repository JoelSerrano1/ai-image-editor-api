import { Entity } from "./entity"


export enum tipoIA {
    TEXT_TO_IMAGE,
    IMAGE_RESIZER,
    SKETCH_TO_IMAGE,
    MAGIC_ERASER
}


export class IA implements Entity {
    constructor(
        readonly id: string,
        readonly nombre: string,
        readonly tipo: tipoIA,
        readonly descripcion: string

    ) { }

    getPrimitive() {
        return {
            id: this.id,
            nombre: this.nombre,
            tipo: this.tipo,
            descripcion: this.descripcion
        }
    }

    static create(id: string, nombre: string, tipo: tipoIA, descripcion: string): IA {
        return new IA(id, nombre, tipo, descripcion)
    }

    update(tipo: tipoIA, nombre: string, descripcion: string): IA {
        return new IA(
            this.id,
            nombre,
            tipo,
            descripcion
        )
    }

    updateTipo(tipo: tipoIA): IA {
        return new IA(
            this.id,
            this.nombre,
            tipo,
            this.descripcion
        )
    }


}