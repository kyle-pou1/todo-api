var express = require('express')
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json()); //json request comes in express parses it and it can be accessed via req.body;

app.get('/', function(req, res) {
    res.send('Todo API Route');
});


app.get('/todos', function(req, res) {
    res.status(200).json(todos);
})
          //url parameters
app.get('/todos/:id', function(req, res) { //:id is what express uses to parse the data
    var todoId = parseInt(req.params.id);
    var matchedTodo;
    todos.forEach( function(todo) {
        if (todoId === todo.id) {
            matchedTodo = todo;
      }
    });
    if (matchedTodo) {
      res.status(200).json(matchedTodo);
    }
    res.status(404).send();
})

app.post('/todos', function(req, res) {
    var body = req.body;
    body.id = todoNextId++;
    todos.push(body);
    res.status(200).json(body);
})


app.listen(port, function() {
    console.log('Express hears you on port:', port + '!');
})
