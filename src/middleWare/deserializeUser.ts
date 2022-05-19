import {get} from "lodash"
import { NextFunction, Request, Response } from "express";
import { verifyJwt } from "../utils/jwtUtils";

// add user to request object
const deserializeUser = (req: Request, res: Response, next: NextFunction) =>{
    const accessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/,"")

    if(!accessToken){
        return next()
    }

    const {decoded, expired} = verifyJwt(accessToken)
    console.log("decoded", decoded)
    // attatch user to res.locals.user
    if(decoded){
        res.locals.user = decoded
        return next()
    }
    // addding default return
    return next()
}

export default deserializeUser