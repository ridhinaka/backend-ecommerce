import { Application, Request, Response } from 'express'
import express from 'express'
import MongoDB from './configs/db'
import routes from './routes/index'


class App {
  public app: Application
  constructor() {
    this.app = express()
    this.plugin()
    this.routes()
  
  }

  protected plugin(): void{
    this.app.use(express.urlencoded({extended: true}),)
  
    MongoDB()
  }

  protected routes(): void{
    this.app.use(routes)
  }
}

// const port = process.env.PORT
const app = new App().app
app.listen(process.env.PORT, () => console.log(`Server running on port http://localhost:${process.env.PORT}`))

export default new App().app