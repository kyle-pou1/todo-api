var express = require('express')
var app = express();
var port = process.env.PORT || 3000;
var todos = [{
  id: 1,
  description: 'Meet JJ for dinner',
  completed: false
},{
  id: 2,
  description: 'Pick up milk and bread',
  completed: false
},{
  id: 3,
  description: 'Tuck myself in',
  completed: true
}];

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


app.listen(port, function() {
    console.log('Express hears you on port:', port + '!');
})
