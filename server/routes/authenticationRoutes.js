import express from 'express'
import { createAccount } from '../controllers/authenticationController.js'

const authentication = express.Router()
authentication.post('/createAccount', createAccount)
export default authentication