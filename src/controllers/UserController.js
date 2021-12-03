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
}

export default new UserController();
