import mongoose from 'mongoose'

interface IUser {
  email: string,
  password: string,
  userName : string,
  phone : number,
  default_address : string,
  amount: number,
  cart_id : string[]
}

interface UserDoc extends mongoose.Document {
  email: string,
  password: string,
  userName : string,
  phone : number,
  default_address : string,
  amount: number,
  cart_id : string[]
}

interface UserModel extends mongoose.Model <UserDoc>{
  build(attr:IUser):UserDoc
}
const userSchema = new mongoose.Schema({
  email : {type: String,required:true, unique:true},
  password : {type: String,required:true},
  userName : {type: String,required:true, unique: true},
  phone: {type: Number,required:true},
  default_address : {type: String ,required:true},
  amount: {type : Number, default : 0},
  cart_id : {type : mongoose.Types.ObjectId,ref: 'Cart'}
})

const User = mongoose.model<UserDoc,UserModel> ('userSchema',userSchema)

export {User}