import User from "../models/User.js";
class UserController {
  async create(req, res) {
    const data = req.body;
    User.create(data, (err, user) => {
      if (err) return res.status(400).json(err);
      else return res.status(201).json(user);
    });
  }

  async index(req, res) {
    User.find({},(err, users) => {
      if (err) return res.status(400).json(err);
      else return res.status(200).json(users);
    })
  }

  
  async read(req, res)  {
    const _id = req.params.id
    User.findById(_id, (err, user) => {
      if (err) return res.status(400).json(err);
      else if (user) return res.status(200).json(user);
      else return res.status(404).json()
    })
  }

  async update(req, res){
    const data = req.body
    const _id = req.params.id
    User.findByIdAndUpdate(_id, data, {new: true},(err, user, x) => {
      if (err) return res.status(400).json(err);
      else if (user) return res.status(202).json(user);
      else return res.status(404).json()
    })
  }

  async delete (req, res){
    const _id = req.params.id
    User.findByIdAndDelete(_id, (err, user)=> {
      if (err) return res.status(400).json(err);
      else if (user) return res.status(204).json();
      else return res.status(404).json()
    })
  }
}

export default new UserController();
