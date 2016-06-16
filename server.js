/**
 * Created by kafui on 6/16/2016.
 */
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
    id: 1,
    description: 'meet mom for lunch',
    completed: false
},{
    id: 2,
    description: 'go to the mall',
    completed: false
},{
    id: 3,
    description: 'dinner date with maud',
    completed: true
}];

app.get('/', function(req,res){
    res.send('TODO API root!');
});
//GET all
app.get('/todos', function(req,res){
    res.json(todos);
});
//get by id
app.get('/todos/:id',function(req,res){
    var todoId = parseInt(req.params.id);
    var matchedTodo;
    todos.forEach(function(todo){
        if (todo.id === todoId){
            matchedTodo = todo;
        }
    });
    if(matchedTodo){
        res.json(matchedTodo);
    }else{
        res.status(404).send();
    }
    //res.send('Asking for todos with id of: ' + req.params.id);
});

app.listen(PORT, function(){
    console.log('Express Listening on port: '+ PORT + '!');
});