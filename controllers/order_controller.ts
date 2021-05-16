import {Request, Response,NextFunction} from 'express'
import {Order} from '../models/Order'

class orderController {
  constructor (){
  }

  static async createOrder (req: Request, res: Response) { 
    const {cart_id} = req.body
    
    try {
        const createOrder = await new Order({cart_id})
        return createOrder.save(function(err){
          Order.populate(createOrder,{path:"user_id"},function(err, createOrder) {  
            res.status(200).json({msg:createOrder})
          })      
        }) 
      }
    catch{
      res.status(500).json({msg: "error create orrder"})
    }
  }
}

export default orderController