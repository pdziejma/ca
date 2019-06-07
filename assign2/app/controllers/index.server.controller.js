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
        paragraph: 'Type animals at end of url to see all animals in database or id to see a specific animal with that id.',
        animaldata: animal
    });
};