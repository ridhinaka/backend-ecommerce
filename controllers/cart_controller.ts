import { Cart } from "../models/Cart";
import { Product } from "../models/Products";
import {User} from "../models/Users"
import { Request, Response, NextFunction } from "express";

class cartController {
  constructor() {}

  static async addToCart(req: Request, res: Response) {
    const { product_id, quantity } = req.body;
    const userId = (<any>req).Id
    const dataCart = await Cart.findOne({user_id:userId,product_id:product_id})
    const findProduct = await Product.findById(product_id)

    try{
      if(findProduct.stock > 0){
        if(dataCart === null){
          const cart = new Cart ({
            user_id : userId,
            product_id,
            quantity : quantity,
            total_price : quantity * findProduct.price
          })
          const updateProduct = await Product.findByIdAndUpdate(product_id,{$set:{quantity:findProduct.stock - 1 }})
          cart.save()
          res.status(200).json({success:true, data:cart})
        }
        else{
          const quantity = dataCart.quantity
          const total = (quantity + 1) * findProduct.price
          const addCart = await Cart.findOneAndUpdate({product_id:product_id},{$set:{quantity : quantity + 1, total_price: total}},{new:true})
          await Product.findByIdAndUpdate(product_id,{$set:{stock:findProduct.stock - 1}})
          res.status(200).json({data:dataCart})
        }
      }else{
        res.status(500)
      }
      // if(findProduct.stock > 0){
      //   const findCart = await Cart.findOne({user_id:userId})
      //   if(findCart === null){   
      //     const createCart = await Cart.create({
      //       user_id : userId,
      //       product_id : product_id,
      //       quantity : quantity,
      //       total_price : quantity * findProduct.price
      //     })
      //     const updateProduct = await Product.findByIdAndUpdate(product_id,{$inc:{stock: - quantity}},{new:true}) 
      //     const updateUser = await User.findByIdAndUpdate(userId, 
      //       {
      //         $push:{cart_id:createCart._id},
      //         $inc : {amount : createCart.total_price }
      //       },
      //       {new:true})
      //       res.status(201).json({msg:"Congrats, your product was added to cart", data: createCart})
        // }else{
          // const findCartId = await Cart.findOne({user_id:userId})
          // const pushToCart = await Cart.findByIdAndUpdate(findCartId.id,{$push:{product_id:findProduct.id},$inc:{quantity:quantity,total_price: quantity * findProduct.price}},{new:true})
          // const updateStock = await Product.findByIdAndUpdate(product_id,{$inc:{stock: - quantity}},{new:true})
          // res.status(200).json({msg:"your product was added",data:pushToCart})
      //   }
      // }else{
      //   res.status(200).json({msg:"stock is not available"})
      // }
    }
    catch(err){
      res.status(200).json({msg:"your product have been added, please kindly go to your cart :)",err})
    }
  }
  
  static async updateCart (req:Request, res: Response) {
    const {quantity,product_id} = req.body
    const {id} = req.params

    try {
      const selectCart = await Cart.findById(id)
      const selectProduct = await Product.findById(product_id) 
      const new_quantity = parseInt(quantity) + selectCart.quantity
      const new_amount = (selectProduct.price * parseInt(quantity))
      const new_totalPrice = selectCart.total_price + new_amount
      const cartAndUpdate = await Cart.findByIdAndUpdate(id,{quantity: new_quantity, total_price: new_totalPrice},{new:true})
      const userUpdate = await User.findByIdAndUpdate((<any>req).Id, {$inc: {amount: new_amount}})

      res.status(200).json({message:"your product have been updated",data: cartAndUpdate})

    } catch (err) {
      res.status(500).json({message: "your product havent been updated yet"})
    }
  }

  static async getAllCart (req: Request, res: Response) {

    const userId = (<any>req).Id
    const findCart = await Cart.find({userId})
    const findPrice = await Product.findOne({user_id:userId})
    const data = Cart.populate(findCart,{path:"product_id"},function(err,findCart){
      let total = 0
      // for (let i = 0; i < findCart.length; i ++){
      //   total += (findCart[i].quantity * (findCart[i].product_id.price))
      // }
      res.status(200).json({data:findCart,data_2:data})
    })
  }

  static async deleteCart(req: Request, res: Response) {
    
    const { id } = req.params;
    const {quantity, product_id} = req.body

    try {
      const findCartdelete = await Cart.findById(id)
      const findProductPrice = await Product.findById(product_id)
      if(findCartdelete){
        const userUpdate = await Cart.findByIdAndUpdate(id,{$pull:{product_id:product_id},$inc:{quantity:-quantity,total_price: -(quantity * findProductPrice.price )}},{new:true})
        res.status(200).json({message:"your products have been removed"})
      }
    } catch (error) {
      res.status(500).json({message:"your products havent been removed"})
    }
  }
}

export default cartController;
