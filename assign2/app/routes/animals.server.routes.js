var animals = require('../controllers/animals.server.controller');

module.exports = function(app) {
    app.route('/animals')
        .post(animals.create)
        .get(animals.list);
    app.route('/:AnimalId')
        .get(animals.read)
        .put(animals.update)
        .delete(animals.delete);
    app.param('AnimalId', animals.animalByID);
};