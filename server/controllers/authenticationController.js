import conn from "../configs/db.js"
import { comparepassword, hashPassword } from "../configs/hashpassword.js"
import jwt from 'jsonwebtoken'


export const createAccount = async (request,response) => {
    const { name, email, password} = request.body
    if (name === "" || email === "" || password === "") {
        return response.status(200).json({status:false, message:"Please fill all fields"})
    }
    const hashpassword = hashPassword(password)
    try {
        const sqlQuerry = "INSERT INTO user(name,email,password) VALUES(?,?,?)"
        conn.query(sqlQuerry,[name,email,hashpassword], (error, result) => {
            console.log(error)
            if (error) return response.status(200).json({status:false, message:error})
            return response.status(201).json({status:true, message:"Account created successfully"})
        })        
    } catch (error) {
        console.log(error)
    }
}

export const loginAccount = async (request,response) => {
    const { email, password} = request.body
    if (email === "" || password === "") {
        response.status(200).json({status:false, message:"Fill all fields"})
    }
    try {
        const sqlQuerry = "SELECT * FROM user WHERE email = ?"
        conn.query(sqlQuerry,[email], (error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            if (result.length > 0) {
                const pass = comparepassword(password, result[0].password)
                if (pass) {
                    const name = result[0].name
                    const token = jwt.sign({name},"login_rtie_owp",{expiresIn:'2d'})
                    response.cookie('token',token)
                } else {
                    return response.status(401).json({status:false, message:"wrong credentials"})
                }
            } else {
                return response.status(404).json({status:false, message:"user not found"})
            } 
        })
    } catch (error) {
        console.log(error)  
    }
}

export const username = async (request,response) => {
    return response.status(200).json({status:true, name: request.name})
}