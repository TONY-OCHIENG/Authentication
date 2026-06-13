import mysql from 'mysql2'

const conn = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'Tony#895',
    database:'auth'
})

conn.connect((error) => {
    if (error) {
        console.log("Connection failed")
    } else{
        console.log("Database connected successfully")
    }
})

export default conn