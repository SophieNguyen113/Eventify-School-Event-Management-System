module.exports = (app) => {
    const sample = require('../controllers/sample.controller.js');

    // Retrieve all samples
    app.get('/sample', sample.find);

    // Retrieves samples accordng to name
    app.get('/sample/:name', sample.findByName);

    // Adds a sample
    app.post('/sample/add', sample.addOne);
}
