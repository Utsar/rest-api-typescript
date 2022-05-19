import {Express, Request, Response } from "express"
import { createUserSessionHandler, getUserSessionHandler } from "./controller/sessionController"
import { createUserHandler } from "./controller/userController"
import requireUser from "./middleWare/requireUser"
import validate from "./middleWare/validateResource"
import { createSessionSchema } from "./schema/sessionSchema"
import { createUserSchema } from "./schema/userSchema"

const Routes = (app: Express) =>{
    // if healtCheck endpoint turns 200 our API is up and running 
    app.get("/healthCheck", (req:Request, res:Response) => res.sendStatus(200))
    
    // API routes
    app.post("/api/users", validate(createUserSchema), createUserHandler)

    app.post("/api/sessions", validate(createSessionSchema), createUserSessionHandler)

    app.get("/api/sessions", getUserSessionHandler)

}

export default Routes

