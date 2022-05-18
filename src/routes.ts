import {Express, Request, Response } from "express"
import { createUserHandler } from "./controller/userController"
import validate from "./middleWare/validateResource"
import { createUserSchema } from "./schema/userSchema"

const Routes = (app: Express) =>{
    // if healtCheck endpoint turns 200 our API is up and running 
    app.get("/healthCheck", (req:Request, res:Response) => res.sendStatus(200))

    app.post("/api/users", validate(createUserSchema), createUserHandler)
}

export default Routes

