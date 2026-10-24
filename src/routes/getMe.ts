import { Router } from "express";
import { GetMeController } from "../controllers/getMeController";
import { UserMiddleware } from "../middlewares/userMiddleware";

export function getMeRoute (router: Router) { 
    router.get("/v1/me", new UserMiddleware().run, new GetMeController().run)
}