var animals = require('../controllers/animals.server.controller');

module.exports = function(app) {
    app.route('/animals')
        .post(animals.create)
        .get(animals.list);
    app.route('/animals/:animalId')
        .get(animals.read)
        .put(animals.update)
        .delete(animals.delete);
    app.param('animalId', animals.animalByID);
};