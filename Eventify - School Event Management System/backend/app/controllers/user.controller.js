const User = require('../models/user.model.js');

exports.find = async (req, res) => {
    await User.find({})
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving samples."
        });
    });
};

exports.usernameExist = async (req, res) => {
    await User.find({"username": req.body.username})
    .then(users => {
        if(!users) {
            return res.status(404).send({
                message: `Username does not exist in database.`
            });
        }
        res.send(users);
    }).catch(err => {
        return res.status(500).send({
            message: `Error retrieving sample with name ${req.body.username}` // is this supposed to be when the database is not found?
        });
    });
}

exports.verifyPassword = async (req, res) => {
    console.log(req.body.username + " " + req.body.password)
    await User.find({"username": req.body.username, "password": req.body.password})
    .then(users => {
        if(!users) {
            return res.status(404).send({
                message: `Username and password does not match`
            });
        }
        res.send(users);
    }).catch(err => {
        return res.status(500).send({
            message: `Error retrieving sample with name ${req.body.username}` // is this supposed to be when the database is not found?
        });
    });
};

exports.addUser = async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        joined_protests: []
    });

    newUser.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send(err);
    });
};
