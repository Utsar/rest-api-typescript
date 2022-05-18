import {Request, Response} from "express"
import { createSession } from "../service/sessionService"
import { validatePassword } from "../service/userService"

export async function createUserSessionHandler(req: Request, res: Response){
    // validate user's password
    const user = await validatePassword(req.body)
    if(!user){
        return res.status(401).send("inavlid email or password")
    }
    // create session
    const session = createSession(user._id, req.get("user-agent") || "")
    // create access token


}