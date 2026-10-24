import { Proyecto_Usuario, rol } from "../entities/proyecto_Usuario";
import { Proyecto_UsuarioNotFound } from "../errors/proyecto_Usuario/proyecto_UsuarioNotFound";
import { proyecto_UsuarioHelper } from "../helpers/proyecto_UsuarioHelper";
import { Proyecto_UsuarioBadRequest } from "../errors/proyecto_Usuario/proyecto_UsuarioBadRequest";


export class proyecto_UsuarioService {

    constructor(private readonly helper: proyecto_UsuarioHelper) { }

    async findProyecto_UsuarioById(id: string): Promise<Proyecto_Usuario> {

        const proyecto_Usuario = await this.helper.findProyecto_UsuarioById(id)

        if (!proyecto_Usuario) {
            throw new Proyecto_UsuarioNotFound(`The proyecto_Usuario with id ${id} can't be reach`)
        }

        return proyecto_Usuario

    }

    async findProyecto_Usuarios(): Promise<Proyecto_Usuario[]> {
        return this.helper.findProyecto_Usuarios()
    }

    async createProyecto_Usuario(id: string, id_proyecto: string, id_usuario: string, rol: rol): Promise<Proyecto_Usuario> {
        try {
            const proyecto_Usuario = Proyecto_Usuario.create(id, id_proyecto, id_usuario, rol)
            return await this.helper.createProyecto_Usuario(proyecto_Usuario)
        } catch (error) {
            throw new Proyecto_UsuarioBadRequest("Can't create proyecto_Usuario")
        }
    }

    async updateProyecto_Usuario(id: string, id_proyecto: string, id_usuario: string, rol: rol): Promise<Proyecto_Usuario> {

        const existingProyecto_Usuario = await this.findProyecto_UsuarioById(id)

        try {
            const updatedProyecto_Usuario = existingProyecto_Usuario.update(id_proyecto, id_usuario, rol)
            await this.helper.updateProyecto_Usuario(updatedProyecto_Usuario)
            return updatedProyecto_Usuario
        } catch (error) {
            throw new Proyecto_UsuarioBadRequest("Can't update proyecto_Usuario")
        }
    }

    async deleteProyecto_Usuario(id: string): Promise<Proyecto_Usuario> {

        const deletedProyecto_Usuario = await this.findProyecto_UsuarioById(id)

        try {
            await this.helper.deleteProyecto_Usuario(id)
            return deletedProyecto_Usuario
        } catch (error) {
            throw new Proyecto_UsuarioBadRequest("Can't delete proyecto_Usuario")
        }
    }

}
