import "reflect-metadata"
import "dotenv/config"
import express from "express"
import cors from "express"
import AppDataSource from "./infraestructure/db/typeorm"
import router from './infraestructure/route/router';
import helmet from "helmet"

const app = express()
app.use(cors())
app.use(express.json())
app.use(helmet.xssFilter())
app.use(helmet.noSniff())
app.use(helmet.hidePoweredBy())
app.use(helmet.frameguard({action:'deny'}))

const PORT = process.env.PORT || 5001

 app.use(router)
AppDataSource.initialize()
.then(()=>{
    console.log("PS conections is ready!")
})
.catch((error)=>{
    console.log("PS Wrong connection: ", error)
})

app.listen(PORT, ()=> console.log(`Backend is UP, PORT ${PORT}`))

export default app