import {User} from '../models/Users'
import bcrypt from 'bcryptjs'
import {Request,Response,NextFunction} from 'express'
import jwt from 'jsonwebtoken'


class userController {
  constructor(){
  }
  static async getUser (req: Request , res: Response) {
    const findUser = await User.find({})
    res.status(200).json({data:findUser})
  }
  static register_new_user (req: Request, res:Response){
    const salt = bcrypt.genSaltSync(10);
    const  newUser =  {
      email : req.body.email,
      password : bcrypt.hashSync(req.body.password,salt),
      phone : req.body.phone,
      default_address : req.body.default_address
    }
    User.create(newUser)
    .then((result) => {
        res.status(201).json({msg:"new user created" ,data:result})  
    })
    .catch ((err) => {
      res.status(500).json({msg:err})
    })
  }
  static loginUser(req:Request, res:Response){   
    User.findOne({ email: req.body.email })
    .then((result) => {
      if(!result){
        return res.status(500).json({message:"user and password doesnt match"})
      }
      const passwordIsValid = bcrypt.compareSync(req.body.password, result.password);
      if(!passwordIsValid){
        return res.status(500).json({message:"user and password doesnt match"})
      }
      const secretKey: string = (process.env.SECRET_KEY as string)
      const token:any = jwt.sign({ id: result.id }, secretKey);
      res.status(200).json({ msg: "login succes", data: result, accessToken: token });
    })
    .catch((err) => {
      res.status(500)
    })
  }

}

export default userController
