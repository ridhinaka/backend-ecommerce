import {User} from '../models/Users'
import {Product} from '../models/Products'
import {Request,Response,NextFunction} from 'express'
import { Cart } from '../models/Cart'


class productController {
  constructor(){

  }

  static add_product (req : Request, res : Response){
    const newProduct = {
      productName : req.body.productName,
      imagePath : req.body.imagePath,
      price : req.body.price,
      stock : req.body.stock,
      description : req.body.description
    }
    Product.create(newProduct)
    .then((createProduct) => {
      res.status(201).json({msg: "product was created", data:createProduct})
    })
    .catch((err) => {
      res.status(500).json({msg:err})
    })
  }

  static async get_product (req : Request, res : Response) {
    const findProduct = await Product.find({})
    res.status(200).json({data:findProduct})
  }
}

export default productController
