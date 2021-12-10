import sharp from "sharp";
import fs from "fs"
import path from "path";

import User from "../models/User.js";
import cryptography from "../utilities/cryptography.js";
import sendGrid from '../middlewares/sendgrid.js'
class UserController {
  async create(req, res) {
    const data = req.body;
    data.password = await cryptography.hash(data.password)
    User.create(data, async (err, user) => {
      if (err) return res.status(400).json({err});
      else {
        let token = await cryptography.generateJwtToken(user.toObject())
        sendGrid.sendMail({
          to: user.email,
          subject: 'Welcome to Task Aanager API',
          html: `<strong>You Successfully registered with Task Manager API</strong>`})    
        return res.status(201).json({user, token})};
    });
  }

  async index(req, res) {
    let user = await req.user.populate('tasks')
    console.log(user.tasks);
     return res.status(200).json({user, tasks: user.tasks});
    
  }

  
  async read(req, res)  {
    const _id = req.params.id
    User.findById(_id, (err, user) => {
      if (err) return res.status(400).json({err});
      else if (user) return res.status(200).json({user});
      else return res.status(404).json()
    })
  }

  async update(req, res){
    const data = req.body

    if (data.password) {
      data.password = await cryptography.hash(data.password)
    }
    let user = req.user
    for(const key in data){
      user[key] = data[key]
    }
    user.save()
    return res.status(202).json({user});
  }

  async delete (req, res){
    let user = req.user
    user.remove()
    sendGrid.sendMail({
      to: user.email,
      subject: 'Account deleted successfully',
      html: `<strong>your account have been deleted, we are sorry to se you leave</strong>`})
    return res.status(200).json({user})
  }
  async uploadAvatar (req, res,next){

    const user = req.user
    let buffer = await sharp(req.file.buffer).png().resize({width: 200, height: 200}).toBuffer()
    user.avatar = buffer
    user.save()
    return res.json({user})
  }
  async getAvatar(req, res, next){
    const user = req.user
    res.set('Content-Type' ,'image/png')
    return res.send(user.avatar)
  }
}

export default new UserController();
