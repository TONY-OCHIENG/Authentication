import mysql from 'mysql2'

const conn = mysql.createConnection({
    host:"http://localhost:3000",
    user:'root',
    password:'Tony#895',
    database:'user'
})

conn.connect((error) => {
    if (error) {
        console.log("Connection failed")
    } else{
        console.log("Database connected successfully")
    }
})

export default conn