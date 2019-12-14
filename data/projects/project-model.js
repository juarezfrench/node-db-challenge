const db = require('../db-config');


module.exports = {
  getProjects,
//   getProjectTasks,
//   getProjectResources,
  addProject,
  addTask,
};
function getProjects() {
  return db('projects');
}

function addProject(project) {
    return db('projects')
      .insert(project)
      .then(ids => getProjectById(ids[0]));
  }
  function addTask(task, project_id) {
    return db('tasks')
      .insert({ ...task, project_id })
      .then(id => db('tasks').where({ id: id[0] }));
  }



function addProject(project) {
  return db('projects')
    .insert(project)
    .then(ids => getProjectById(ids[0]));
}

// }
