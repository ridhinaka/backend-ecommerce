import { Router, Request, Response } from 'express'
import IRoutes from '../routes/IRoutes'
import cartController from '../controllers/cart_controller'

class cartRoutes implements IRoutes{
  router : Router
  constructor () {
    this.router = Router()
    this.route()
  }
  route(): void {
    this.router.get('/cart',cartController.getAllCart)
    this.router.post('/cart/push',cartController.addToCart)
    this.router.patch('/cart/update/:id',cartController.updateCart)
    this.router.delete('/cart/:id',cartController.deleteCart)
  }
}

export default new cartRoutes().router