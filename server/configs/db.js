import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.MYSQL_USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})

conn.connect((error) => {
    if (error) {
        console.log("Connection failed")
    } else{
        console.log("Database connected successfully")
    }
})

export default conn