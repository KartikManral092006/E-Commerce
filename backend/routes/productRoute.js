import express from 'express'
import { addProduct,listProducts , removeProduct , singleProduct } from "../controllers/productController.js"
import upload from '../middleware/multer.js'
import adminAuth from '../middleware/adminAuth.js'

const productRouter = express.Router()


productRouter.post('/addProduct' ,adminAuth,upload.fields([{name: 'image1' , maxCount:1},{name: 'image2' , maxCount:1},{name: 'image3' , maxCount:1},{name: 'image4' , maxCount:1}]), addProduct)
productRouter.get('/listProducts' ,listProducts)
productRouter.post('/removeProduct' ,adminAuth, removeProduct)
productRouter.post('/singleProduct' ,singleProduct)


export default productRouter
