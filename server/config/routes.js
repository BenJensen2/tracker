const projects = require('../controllers/projects');

module.exports = function(app){
  app.get('/api',projects.index);
}