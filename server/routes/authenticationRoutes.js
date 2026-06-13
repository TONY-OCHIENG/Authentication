import express from 'express'
import { createAccount, loginAccount } from '../controllers/authenticationController.js'

const authentication = express.Router()
authentication.post('/createAccount', createAccount)
authentication.post('/login',loginAccount)
export default authentication