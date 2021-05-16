import { Router, Request, Response } from 'express'
import userRoutes from '../routes/user_route'
import productRoutes from '../routes/product_route'
import cartRoutes from '../routes/cart_route'
import orderRoutes from '../routes/order_route'
import auth_Jwt from '../middlewares/auth_Jwt'


class Routes {
  router: Router
  constructor() {
      this.router = Router()
      this.routes()
      this.product()
      this.user()
      // this.auth()
      this.cart()
      this.order()
  
  }
  
  public routes(): void {
    this.router.get("/", (req: Request, res: Response) => {
      res.status(200).json({ msg: "welcome to mobile legend" });
    })
  }
  public product() :void{
    this.router.use(productRoutes)
  }
  
  public user(): void{
      this.router.use(userRoutes)
  }

  // public auth() :void{
  //   this.router.use(auth_Jwt.authentication)
  // }

  public cart() :void{
    this.router.use(cartRoutes)
  }

  public order() :void{
    this.router.use(orderRoutes)
  }

}

export default new Routes().router 