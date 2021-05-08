import { Router, Request, Response } from 'express'
import IRoutes from '../routes/IRoutes'
import productController from '../controllers/product_controller'

class productRoutes implements IRoutes{
  router : Router
  constructor () {
    this.router = Router()
    this.route()
  }
  route(): void {
    this.router.get('/product',productController.get_product)
    this.router.post('/product/create',productController.add_product)
  }
}

export default new productRoutes().router