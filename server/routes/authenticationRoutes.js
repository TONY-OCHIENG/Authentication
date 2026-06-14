import express from 'express'
import { createAccount, loginAccount, logout, username } from '../controllers/authenticationController.js'
import { auth } from '../middlewares/auth.js'

const authentication = express.Router()
authentication.post('/createAccount', createAccount)
authentication.post('/login',loginAccount)
authentication.get('/',auth,username)
authentication.get('/logout',logout)
export default authentication