const express = require('express');

const Tasks = require('./task-model');

const router = express.Router();


router.get('/', (req, res) => {
    Tasks.getTasks()
    .then(tasks => {
        const updatedTasks = tasks.map(task => {
          if (task.completed === 0) {
            task.completed = false;
          } else if (task.completed === 1) {
            task.completed = true;
          }
          return task;
        
        });
        res.status(200).json(updatedTasks);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Failed to get tasks' })
      });
    })
    router.post('/:id/addTask', (req, res) => {
        Projects.getProjectById(req.params.id)
          .then(project => {
            if (project) {
              const newTask = { ...req.body, completed: 0 };
              Projects.addTask(newTask, req.params.id).then(task => {
                res.status(201).json(task);
              });
            } else {
              res
                .status(404)
                .json({ message: 'Could not fine project with given ID' });
            }
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to create new task' });
          });
      });

      module.exports = router