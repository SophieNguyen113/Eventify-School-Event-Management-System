const Protest = require('../models/protest.model.js')

exports.find = async (req, res) => {
    await Protest.find({})
    .then(allprotests => {
        res.send(allprotests);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving samples."
        });
    });
};

exports.findByName = async (req, res) => {
    await Protest.find({name: req.params.name})
    .then(protests => {
        if(!protests) {
            return res.status(404).send({
                message: `No entries in database sample not found with name ${req.params.name}`
            });
        }
        res.send(protests);
    }).catch(err => {
        return res.status(500).send({
            message: `Error retrieving sample with name ${req.params.name}`
        });
    });
};

exports.addOne = async (req, res) => {
    const newProtest = new Protest({
        name: 'a new protest',
        date: 'a new date',
        location: 'a new location',
        time: 'any time!!!!'
      })

    newProtest.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send(err);
    });
};