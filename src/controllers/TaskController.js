import Task from "../models/Task.js";
class TaskController {
  async create(req, res) {
    const data = req.body;
    Task.create(data, (err, user) => {
      if (err) return res.status(400).json(err);
      else return res.status(201).json(user);
    });
  }

  async index(req, res) {
    Task.find({},(err, tasks) => {
      if (err) return res.status(400).json(err);
      else return res.status(200).json(tasks);
    })
  }
  async read(req, res)  {
    const _id = req.params.id
    Task.findById(_id, (err, task) => {
      if (err) return res.status(400).json(err);
      else if (task) return res.status(200).json(task);
      else return res.status(404).json()
    })
  }

  async update(req, res){
    const data = req.body
    const _id = req.params.id
    Task.findByIdAndUpdate(_id, data, {new: true},(err, task, x) => {
      if (err) return res.status(400).json(err);
      else if (task) return res.status(202).json(task);
      else return res.status(404).json()
    })
  }

  async delete (req, res){
    const _id = req.params.id
    Task.findByIdAndDelete(_id, (err, task)=> {
      if (err) return res.status(400).json(err);
      else if (task) return res.status(204).json();
      else return res.status(404).json()
    })
  }
}

export default new TaskController();
