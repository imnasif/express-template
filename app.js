var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./middlewares/response'));
app.use(require('./middlewares/logger'));
app.use(require('./controllers'));

app.listen(port, () => console.log('Listening on port ' + port));


module.exports = app;