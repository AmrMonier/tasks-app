import Task from "../models/Task.js";
class TaskController {
  async create(req, res) {
    const data = req.body;
    Task.create({...data, owner: req.user._id}, (err, task) => {
      if (err) return res.status(400).json(err);
      else return res.status(201).json({task});
    });
  }

  async index(req, res) {
    Task.find({owner: req.user._id},(err, tasks) => {
      if (err) return res.status(400).json(err);
      else return res.status(200).json({tasks});
    })
  }
  async read(req, res)  {
    const _id = req.params.id
    Task.findOne({_id, owner: req.user._id}, (err, task) => {
      if (err) return res.status(400).json(err);
      else if (task) return res.status(200).json({task});
      else return res.status(404).json()
    })
  }

  async update(req, res){
    const data = req.body
    const _id = req.params.id
    
    Task.findOneAndUpdate({_id, owner: req.user._id}, data, {new: true},(err, task, x) => {
      if (err) return res.status(400).json(err);
      else if (task) return res.status(202).json({task});
      else return res.status(404).json()
    })
  }

  async delete (req, res){
    const _id = req.params.id
    Task.findOneAndDelete({_id, owner: req.user._id}, (err, task)=> {
      if (err) return res.status(400).json(err);
      else if (task) return res.status(204).json();
      else return res.status(404).json()
    })
  }
}

export default new TaskController();
