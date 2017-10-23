var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Location = require('./api/models/locationmodel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://heroku_04j13l6k:lluh5qmeirebeqctrb8rknjdca@ds111565.mlab.com:11565/heroku_04j13l6k');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/locationroutes');
routes(app);


app.listen(port);
<<<<<<< HEAD
=======


console.log('locationsapi RESTful API server started on: ' + port);
>>>>>>> 35b9d3b2f9abe33d37d34e9c5f68027c62712cf7
