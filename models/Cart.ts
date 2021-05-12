import mongoose from 'mongoose'

interface ICart {
  user_id : string,
  product_id : string,
  total_price : number,
  quantity : number
}
interface CartDoc extends mongoose.Document {
  user_id : string,
  product_id : string,
  total_price : number,
  quantity : number
}

interface CartModel extends mongoose.Model <CartDoc>{
  build(attr : ICart): CartDoc
}

const cartSchema = new mongoose.Schema ({
  user_id : {type: mongoose.Types.ObjectId, ref:'User'},
  product_id : {type: mongoose.Types.ObjectId, ref:'productSchema'},
  total_price : {type: Number, default: 0},
  quantity : {type: Number}
})

const Cart = mongoose.model<CartDoc, CartModel> ('cartSchema', cartSchema)

export {Cart}