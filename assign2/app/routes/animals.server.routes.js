var animals = require('../controllers/animals.server.controller');
module.exports = function(app) {
    app.route('/animals')
     .post(animals.create)
     .get(animals.list);
    app.route('/:AnimalId')
     .get(animals.read);
    app.param('AnimalId', animals.animalByID);
};