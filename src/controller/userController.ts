import {Request, Response} from "express"
import { omit } from "lodash"
import { createUserInput } from "../schema/userSchema";
import { createUser } from "../service/userService";
import logger from "../utils/logger";

export async function createUserHandler(req: Request<{}, {}, createUserInput["body"]>, res: Response){
    try {
        const user = await createUser(req.body)
        return res.send(omit(user.toJSON(), "password"))
    } catch (error: any) {
        logger.error(error)
        return res.status(400).send(error.message)
    }

}

