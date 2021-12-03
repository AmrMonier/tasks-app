import Task from "../models/Task.js";
class TaskController {
  async create(req, res) {
    const data = req.body;
    Task.create(data, (err, user) => {
      if (err) return res.status(400).json(err);
      else return res.status(201).json(user);
    });
  }
}

export default new TaskController();
