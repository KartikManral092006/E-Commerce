import express from 'express'
import {addToCart,getUserCart,updateCart} from '../controllers/cartController.js'
import authUser from '../middleware/auth.js'


const cartRouter  = express.Router()

cartRouter.post('/getUserCart',authUser,getUserCart)
cartRouter.post('/addToCart',authUser,addToCart)
cartRouter.post('/updateCart',authUser,updateCart)

export default cartRouter
