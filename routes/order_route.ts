import { Router, Request, Response } from 'express'
import IRoutes from '../routes/IRoutes'
import orderController from '../controllers/order_controller'


class orderRoutes implements IRoutes{
  router : Router
  constructor () {
    this.router = Router()
    this.route()
  }
  route(): void {
    this.router.get('/order/allorder',orderController.getOrder)
    this.router.post('/order/create',orderController.createOrder)
  }
}

export default new orderRoutes().router