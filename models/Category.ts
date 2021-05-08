import mongoose from 'mongoose'

interface ICategory {
  product_id: string [],
  category_name : string,
}

interface CategoryDoc extends mongoose.Document {
  product_id : string [],
  category_name : string
}

interface CategoryModel extends mongoose.Model <CategoryDoc> {
  build (attr : ICategory): CategoryDoc
}

const categorySchema = new mongoose.Schema ({
  product_id : {types : mongoose.Types.ObjectId},
  category_name : {types : String, required: true, unique : true}
})

const categoryExport = mongoose.model <CategoryDoc,CategoryModel> ('categorySchema', categorySchema)

export {categoryExport}