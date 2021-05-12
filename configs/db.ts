import mongoose from 'mongoose'


class mongoDB {
  public connectDB(): void{

    const pathURL = "mongodb://ridhinaka:pangpang1!@cluster0-shard-00-00.zbd7c.mongodb.net:27017,cluster0-shard-00-01.zbd7c.mongodb.net:27017,cluster0-shard-00-02.zbd7c.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-11sg7h-shard-0&authSource=admin&retryWrites=true&w=majority"
    // const pathURL = "mongodb:http://localhost/assgntyp2"
    const connectOption = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify: false }
    mongoose.connect(pathURL, connectOption, ()=> {
      console.log("rihjsdioaiod")
    })
      
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'Connection error :'))
    db.once('open', () => {
      console.log("ridhinaka")
    })
  }
}

export default new mongoDB().connectDB