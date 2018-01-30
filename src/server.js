//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

const express = require('express');
const favicon = require('express-favicon');
 
const app = express();
 
app.use(favicon(__dirname + './favicon.png'));
 
// Add your routes here, etc. 
 
const server = app.listen(3000, function(){
    console.log('server is running at %s .', server.address().port);
});