import User from "../models/User.js";
import cryptography from "../utilities/cryptography.js";
class UserController {
  async create(req, res) {
    const data = req.body;
    data.password = await cryptography.hash(data.password)
    User.create(data, async (err, user) => {
      if (err) return res.status(400).json({err});
      else {
        let token = await cryptography.generateJwtToken(user.toObject())       
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
    return res.status(200).json({user})
  }
  async uploadAvatar (req, res){
    console.log(req.file);
    const user = req.user
    user.avatar = '/public/avatars/' + req.file.filename
    user.save()
    return res.json({user})
  }
}

export default new UserController();
