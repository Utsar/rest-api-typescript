import { NextFunction, Request, Response } from "express"

// when this middleware is used, we want to make sure the user is required so only use this on routes when we require an user

const requireUser = (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user

    if(!user){
        return res.sendStatus(403)
    }

    // if i get to this part here it means the user is on response object
    // because on deserialiseUser we put the user on response object because they had valid token
    return next()
}

export default requireUser