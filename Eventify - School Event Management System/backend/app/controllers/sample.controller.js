const Sample = require('../models/sample.model.js');

exports.find = async (req, res) => {
    await Sample.find({})
    .then(samples => {
        res.send(samples);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving samples."
        });
    });
};

exports.findByName = async (req, res) => {
    await Sample.find({name: req.params.name})
    .then(samples => {
        if(!samples) {
            return res.status(404).send({
                message: `No entries in database sample not found with name ${req.params.name}`
            });
        }
        res.send(samples);
    }).catch(err => {
        return res.status(500).send({
            message: `Error retrieving sample with name ${req.params.name}`
        });
    });
};

exports.addOne = async (req, res) => {
    const newSample = new Sample({
        title: "new!",
        name: "newName"
    });

    newSample.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send(err);
    });
    // await Sample.find({name: req.params.name})
    // .then(samples => {
    //     if(!samples) {
    //         return res.status(404).send({
    //             message: `No entries in database sample not found with name ${req.params.name}`
    //         });
    //     }
    //     res.send(samples);
    // }).catch(err => {
    //     return res.status(500).send({
    //         message: `Error retrieving sample with name ${req.params.name}`
    //     });
    // });
};
