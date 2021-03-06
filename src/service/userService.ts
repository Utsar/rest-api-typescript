import { omit } from "lodash";
import {DocumentDefinition} from "mongoose"
import UserModel, { UserDocument } from "../models/userModel";

export const createUser = async (input: DocumentDefinition<Omit<UserDocument, "createdAt" | "updatedAt" |"comparePassword">>) => {
    try{
        const user = await UserModel.create(input)
        return omit(user.toJSON(), "password")
    }catch (error: any){
        throw new Error(error)
    }
    
}

export const validatePassword = async ({email,password}: {email: string, password: string}) => {
    const user = await UserModel.findOne({email})

    if(!user){
        return false
    }
    const isValid = await user.comparePassword(password)

    if(!isValid){
        return omit(user.toJSON(), "password")
    }
}