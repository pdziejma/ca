module.exports = function(app) {
    var animals = require('../controllers/animals.server.controller');
    var index = require('../controllers/index.server.controller');
    app.route('/')
    .get(index.render);
};