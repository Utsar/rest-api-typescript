import pino from "pino"
import dayjs from "dayjs"


// create nicely formatted log info
const logger = pino({
    transport:{
        target: "pino-pretty",      
    },
    timestamp: () => `,"time":"${dayjs().format()}"`,
})

export default logger