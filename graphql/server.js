import express from 'express';
import bodyParser from 'body-parser';
import models from './models/index.js';
import GraphHTTP from 'express-graphql';
import Schema from './graphql';

var app = express();
var router = express.Router();
var cors = require('cors');

function startApp(port) {
    app.listen(port, function() {
        console.log('Server is listening on port ' + port);
    });
}

models.sequelize.sync()
    .then(function() {
        startApp(8088);
    })
    .catch(function (e) {
        throw new Error(e);
    });

const corsOptions = {
    origin(origin, callback) {
        callback(null, true);
    },
    credentials: true
};
app.use(cors(corsOptions));
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,token');
    next();
}
app.use(allowCrossDomain);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*
 * This is here because of authentication. Auth middleware decodes the JWT token
 * and saves its content to request.user object.
 */
app.use('/graphql', GraphHTTP((request) => ({
        schema: Schema,
        context: { user: request.user },
        pretty: true,
        graphiql: true
})));
