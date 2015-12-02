// BASE SETUP
// ==============================================

var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');
var http = require('http');
var i18n = require("i18n");
var url = require("url");
var mongodb = require('mongodb');
var assert = require('assert');
var socket = require('socket.io');


var app     = express();
var port    =   process.env.PORT || 3000;
var io = socket.listen(server);
var routes = require('./routes');

// configure stuff here
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(methodOverride());
app.use(session({
        resave: true,
        saveUninitialized: true,
        secret: 'uwotm8'
}));


var env = app.settings.env;
// Configuration
if(env == 'production'){ 
	app.use(errorHandler());
}else{
	app.use(errorHandler({
        	dumpExceptions: true,
        	showStack: true
    	}));
}


// ROUTES
// ==============================================

// root page
app.get('/', routes.index);

// we'll create our routes here


// START THE SERVER
// ==============================================
var server = app.listen(port, function() {
    console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});


