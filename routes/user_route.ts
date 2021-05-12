import { Router, Request, Response } from 'express'
import IRoutes from '../routes/IRoutes'
import userController from '../controllers/user_controller'
import authJwt from '../middlewares/auth_Jwt'

class userRoutes implements IRoutes{
  router : Router
  constructor () {
    this.router = Router()
    this.route()
  }
  route(): void {
    this.router.post('/user/create',userController.register_new_user)
    this.router.post('/user/login',userController.loginUser)

 
    this.router.get('/user',userController.getUser)
    this.router.get('/user:id',userController.getUser)
    this.router.use(authJwt.authentication)
  }
}

export default new userRoutes().router