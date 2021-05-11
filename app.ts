import { Application, Request, Response } from 'express'
import express from 'express'
import MongoDB from './configs/db'
import routes from './routes/index'
import cors from 'cors'


class App {
  public app: Application
  constructor() {
    this.app = express()
    this.cors()
    this.plugin()
    this.routes()
    
  }

  protected cors():void {
    this.app.use(cors())
  }

  protected plugin(): void{
    this.app.use(express.urlencoded({extended: true}),)
    MongoDB()
  }

  protected routes(): void{
    this.app.use(routes)
  }

}
const app = new App().app
app.listen(process.env.PORT, () => console.log(`Server running on port http://localhost:${process.env.PORT}`))

export default new App().app