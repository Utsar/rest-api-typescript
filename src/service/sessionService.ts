import { FilterQuery } from "mongoose";
import SessionModel, { SchemaDocument } from "../models/sessionModel";

export const createSession = async (userId: String, userAgent: String) => {
    const session = await SessionModel.create({user: userId, userAgent})

    return session.toJSON()
}

export const findSession = async (query: FilterQuery<SchemaDocument>) => {
    return SessionModel.find(query).lean()
}

