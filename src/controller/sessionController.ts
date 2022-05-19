import {Request, Response} from "express"
import { createSession, findSession } from "../service/sessionService"
import { validatePassword } from "../service/userService"
import config from "config"
import { signJwt } from "../utils/jwtUtils"


export const createUserSessionHandler = async (req: Request, res: Response)=>{
    // validate user's password
    const user = await validatePassword(req.body)
    if(!user){
        return res.status(401).send("inavlid email or password")
    }
    // create session
    const session = await createSession(user._id, req.get("user-agent") || "")
    // create access token
    const accessToken = signJwt(
        {...user, session: session._id},
        {expiresIn: config.get("accessTokenTtl")}
    )
    // create refresh token 
    const refreshToken = signJwt(
        {...user, session: session._id},
        {expiresIn: config.get("refreshTokenTtl")}
    )
    // return access & refresh tokens

    return res.send({accessToken, refreshToken})


}

export const getUserSessionHandler = async (req: Request, res: Response) => {
    const userId = res.locals.user._id

    console.log("this is userId", userId)

    const sessions = await findSession({user: userId, valid: true})
    console.log({sessions})
    return res.send(sessions)

}