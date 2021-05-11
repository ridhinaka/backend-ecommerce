import mongoose from 'mongoose'

interface IProduct {
  productName : string,
  imagePath : string,
  price: number,
  category : string[],
  stock : number,
  description: string
}

interface ProductDoc extends mongoose.Document {
  productName : string,
  imagePath : string,
  price: number
  category : string[],
  stock : number,
  description: string
}


interface ProductModel extends mongoose.Model <ProductDoc> {
  build(attr: IProduct): ProductDoc
}

const productSchema = new mongoose.Schema({
  productName : {type:String},
  imagePath : {type : String, required: true},
  price : {type : Number, required: true},
  category :  {type : mongoose.Types.ObjectId, ref: 'Category'},
  stock : {type : Number, required: true},
  description : {type : String, required: true},
})

const Product = mongoose.model <ProductDoc,ProductModel> ('productSchema', productSchema)

export {Product}