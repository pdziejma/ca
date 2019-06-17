var Animal = require('mongoose').model('Animal');
var animals = require('../controllers/animals.server.controller');

module.exports = function(app) {
    app.post('/', function(req, res) {
        let newAnimal = new Animal({
            name: req.body.name,
            color: req.body.color,
            size: req.body.size
        });
        newAnimal
            .save()
            .then(function(result){
                console.log(result);
            });
    });
    /*
    app.post('/deleted', function(req, res){
        Animal.delete( {
            name: req.body.name
        }).then(res.redirect(''));
    });
    */
    app.route('/animals')
        .post(animals.create)
        .get(animals.list);
    app.route('/:AnimalId')
        .get(animals.read)
        .put(animals.update)
        .delete(animals.delete);
    app.param('AnimalId', animals.animalByID);
};