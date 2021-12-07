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
    let filter = {owner: req.user._id}
    if (req.query.completed) {
      if (req.query.completed === 'true') {
        filter.completed = true
      }
      if (req.query.completed === 'false') {
        filter.completed = false
      }
    }
    let tasksQuery = Task.find(filter)
    if(req.query.sortBy){
      let sortObject = {}
      let sortOptions = req.query.sortBy.split(':')
      if (sortOptions[1] === 'asc') {
        sortObject[sortOptions[0]] = 1
        tasksQuery.sort(sortObject)
      } else if(sortOptions[1] === 'desc'){
        sortObject[sortOptions[0]] = -1
        tasksQuery.sort(sortObject)  
      }
    }
    
    tasksQuery.exec((err, tasks) => {
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
