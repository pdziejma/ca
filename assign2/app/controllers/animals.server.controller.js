var Animal = require('mongoose').model('Animal');

exports.create = function(req, res, next) {
    var animal = new Animal(req.body);
    animal.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(animal);
        }
    });
};

exports.list = function(req, res, next) {
    Animal.find({}, function(err, animals) {
        if (err) {
            return next(err);
        } else {
            res.json(animals);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.animal);
};

exports.animalByID = function(req, res, next, id) {
    Animal.findOne({
        _id: id
    }, function(err, animal) {
        if (err) {
            return next(err);
        } else {
            req.animal = animal;
            next();
        }
    });
};