module.exports = (app) => {
    const user = require('../controllers/user.controller.js');

    // Retrieve all samples
    app.get('/user', user.find);

    app.post('/user/usernameExist', user.usernameExist);

    app.post('/user/verifyPassword', user.verifyPassword);

    app.post('/user/add', user.addUser);
}
