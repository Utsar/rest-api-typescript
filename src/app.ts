import express from "express"
import config from "config"
import connect from "./utils/connect"
import logger from "./utils/logger"
import Routes from "./routes"
import deserializeUser from "./middleWare/deserializeUser"



const app = express()


// middleware
app.use(express.json())
app.use(deserializeUser)

const PORT = config.get<number>("port")

app.listen(PORT, async () =>{
    logger.info(`app is running on port: ${PORT}`)
    await connect()

    Routes(app)
})