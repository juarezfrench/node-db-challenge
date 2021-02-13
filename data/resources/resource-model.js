const db = require('../db-config');

module.exports = {
    getResources,
    addResource,
  };
  
  function getResources() {
    return db('resources');
  }
  function addResource(resource) {
    return db('resources').insert(resource);
    // .then(ids => getResourceById(ids[0]))
  }
  function addResource() {}
  