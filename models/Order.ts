import mongoose from 'mongoose'

interface IOrder {
  user_id : string,
  cart_id : string,
}

interface OrderDoc extends mongoose.Document {
  user_id : string,
  cart_id : string,
}

interface OrderModel extends mongoose.Model <OrderDoc> {
  build (attr: IOrder): OrderDoc
}

const orderSchema = new mongoose.Schema ({
  user_id : {type : mongoose.Types.ObjectId,ref:'User'},
  cart_id : {type : mongoose.Types.ObjectId, ref: 'cartSchema'},
})

const Order = mongoose.model <OrderDoc,OrderModel> ('orderSchema', orderSchema)

export {Order}