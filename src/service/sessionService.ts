import SessionModel from "../models/sessionModel";

export async function createSession(userId: String, userAgent: String){
    const session = await SessionModel.create({user: userId, userAgent})

    return session.toJSON()
}