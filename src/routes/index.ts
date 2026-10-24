import { Router } from "express"
import { getHealthRoute } from "./health"
import { getMeRoute } from "./getMe"
import { getUserRoute } from "./userRoutes/getUser"
import { getUsersRoute } from "./userRoutes/getUsers"
import { postUsersRoute } from "./userRoutes/postUsers"
import { putUsersRoute } from "./userRoutes/putUsers"
import { deleteUsersRoute } from "./userRoutes/deleteUsers"
import { getProyectoRoute } from "./proyectoRoutes/getProyecto"
import { getProyectosRoute } from "./proyectoRoutes/getProyectos"
import { postProyectoRoute } from "./proyectoRoutes/postProyecto"
import { putProyectoRoute } from "./proyectoRoutes/putProyecto"
import { deleteProyectoRoute } from "./proyectoRoutes/deleteProyecto"
import { getVersionRoute } from "./versionRoutes/getVersion"
import { getVersionsRoute } from "./versionRoutes/getVersions"
import { postVersionRoute } from "./versionRoutes/postVersion"
import { putVersionRoute } from "./versionRoutes/putVersion"
import { deleteVersionRoute } from "./versionRoutes/deleteVersion"

export function registerRoutes(): Router {
    const router = Router()

    getHealthRoute(router)
    getMeRoute(router)


    getUserRoute(router)
    getUsersRoute(router)
    postUsersRoute(router)
    putUsersRoute(router)
    deleteUsersRoute(router)


    getProyectoRoute(router)
    getProyectosRoute(router)
    postProyectoRoute(router)
    putProyectoRoute(router)
    deleteProyectoRoute(router)


    getVersionRoute(router)
    getVersionsRoute(router)
    postVersionRoute(router)
    putVersionRoute(router)
    deleteVersionRoute(router)

    return router
}