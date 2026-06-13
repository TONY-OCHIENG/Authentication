import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import conn from './configs/db.js'
import authentication from './routes/authenticationRoutes.js'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173',
    methods:["PUT","GET","POST","DELETE"],
    credentials:true
}))
app.use(cookieParser())
app.use('/auth',authentication)

app.listen(process.env.PORT,() => {
    console.log("Server is running")
}) 