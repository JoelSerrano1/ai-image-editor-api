import { Entity } from "./entity"


export class Version implements Entity {
    constructor(
        readonly id: string,
        readonly canvas: string,
        readonly id_proyecto: string,
        readonly created_at: Date,
        readonly ultimo: boolean
    ) { }

    getPrimitive() {
        return {
            id: this.id,
            canvas: this.canvas,
            id_proyecto: this.id_proyecto,
            created_at: this.created_at,
            ultimo: this.ultimo
        }
    }

    static create(id: string, canvas: string, id_proyecto: string, created_at: Date, ultimo: boolean): Version {
        return new Version(id, canvas, id_proyecto, created_at, ultimo)
    }

    update(canvas: string, id_proyecto: string, created_at: Date, ultimo: boolean): Version {
        return new Version(
            this.id,
            canvas,
            id_proyecto,
            created_at,
            ultimo
        )
    }

    updateCanvas(canvas: string): Version {
        return new Version(
            this.id,
            canvas,
            this.id_proyecto,
            this.created_at,
            this.ultimo
        )
    }

    updateCreatedAt(created_at: Date): Version {
        return new Version(
            this.id,
            this.canvas,
            this.id_proyecto,
            created_at,
            this.ultimo
        )
    }

    updateUltimo(ultimo: boolean): Version {
        return new Version(
            this.id,
            this.canvas,
            this.id_proyecto,
            this.created_at,
            ultimo
        )
    }


}