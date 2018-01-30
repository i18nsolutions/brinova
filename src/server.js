//Install express server
const express = require('express');
var nofavicon = require("express-no-favicons")
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.use(nofavicon());

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
