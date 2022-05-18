import {Express, Request, Response } from "express"

const Routes = (app: Express) =>{
    // if healtCheck endpoint turns 200 our API is up and running 
    app.get("/healthCheck", (req:Request, res:Response) => res.sendStatus(200))
}

export default Routes

