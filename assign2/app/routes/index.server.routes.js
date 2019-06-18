module.exports = function(app) {
    var animals = require('../controllers/animals.server.controller');
    var index = require('../controllers/index.server.controller');
    app.route('/')
    .post(animals.create)
    .get(index.render);
};