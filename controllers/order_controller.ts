import {Request, Response,NextFunction} from 'express'
import {Order} from '../models/Order'

class orderController {
  constructor (){
  }

  static async getOrder (req:Request, res:Response) {
    const userId = (<any>req).Id
    const findOrder = await Order.find({user_id:userId})

    const dataOrder = Order.populate(findOrder,{path:"user_id"},function(err,findOrder){
      res.status(200).json({msg:"your order have been processed",data:findOrder})
    })
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