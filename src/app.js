import 'dotenv/config'
import express from "express"
import mongoose from 'mongoose'

// import __dirname from "./path.js"
import indexRouter from "./routes/index.router.js"


// Inicialización de servidor express, asignación de puerto y ruta de BDD /////
const app = express()
const PORT = 8080


// Middlewares de configuración ///////////////////////////////////////////////
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// Conexión con la base de datos //////////////////////////////////////////////
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.DBPATH)
        console.log("Conectado a MongoDB")
    } catch (error) {
        console.log(error)
        process.exit()
    }
}

connectToMongoDB()


// Rutas //////////////////////////////////////////////////////////////////////
// app.use("/public", express.static(__dirname + "/public"))
app.use("/", indexRouter)


app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`)
})