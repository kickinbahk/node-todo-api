var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
  'dialect': 'sqlite',
  'storage': _dirname + '/data/dev-todo-api.sqlite'
})

var db = {}

db.todo = sequelize.import(_dirname + '/models/todo.js')
db.sequelize = sequelize
db.Sequelize = Sequelize


module.exports = db
