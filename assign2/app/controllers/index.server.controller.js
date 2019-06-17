var Animal = require('mongoose').model('Animal');
var animal;

Animal.find({}, function (err, animals) {
    if (err) {
        return next(err);
    } else {
        animal = animals;
    }
})

exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    res.render('index', {
        title: 'Animal Database',
        paragraph: 'Type in an animal to add to the database.',
        animaldata: animal
    });
};