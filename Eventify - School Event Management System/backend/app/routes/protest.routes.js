module.exports = (app) => {
    const protest = require('../controllers/protest.controller.js');

    // Retrieve all samples
    app.get('/search', protest.find);

    // Retrieves samples accordng to name
    app.get('/search/:name', protest.findByName);

    // Adds a sample
    app.post('/add', protest.addOne);
}