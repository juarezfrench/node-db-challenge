const express = require('express');

const Projects = require('./project-model');

const router = express.Router();


router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        // console.log(projects);
        const updatedProjects = projects.map(project => {
          if (project.completed === 0) {
            project.completed = false;
          } else if (project.completed === 1) {
            project.completed = true;
          }
          return project;
        });
        res.status(200).json(updatedProjects);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Failed to get projects' });
  router.post('/', (req, res) => {
    const newProj = { ...req.body, completed: 0 };
    Projects.addProject(newProj)
      .then(project => {
        res.status(201).json(project);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Failed to create new project' });
      });
  });
})
})
  module.exports = router
 
    