var express = require('express')
var app = express();
var port = process.env.PORT || 3000;


app.get('/', function(req, res) {
    res.send('todo api route');
});



app.listen(port, function() {
    console.log('Express hears you on port:', port + '!');
})
