import express from "express"
import config from "config"
import connect from "./utils/connect"

const app = express()

const PORT = config.get<number>("port")

app.listen(PORT, async () =>{
    console.log(`app is running on port: ${PORT}`)
    await connect()
})