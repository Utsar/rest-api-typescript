import {object, string, TypeOf} from "zod"

export const createUserSchema = object({
    body: object({
        name: string({required_error: "Name is required!"}),
        password: string({required_error: "Password is required"}).min(6, "Password must be minimum of six characters"),
        passwordConfirmation: string({required_error: "Password is required"}).min(6, "Password must be minimum of six characters"),
        email: string({required_error: "Email is required"}).email("Not a valid email!")
    }).refine((data) => data.password === data.passwordConfirmation, {message: "passwords do not match", path: ["passwordConfirmation"]})
})

export type createUserInput = Omit<TypeOf<typeof createUserSchema>, "body.passwordConfirmation">