import express from 'express'

import { addProduct,listProducts , removeProduct , singleProduct } from "../controllers/productController.js"

const productRouter = express.Router()


productRouter.post('/addProduct' , addProduct)
productRouter.post('/listProducts' , listProducts)
productRouter.post('/removeProduct' , removeProduct)
productRouter.post('/singleProduct' , singleProduct)


export default productRouter 
