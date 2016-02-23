var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
    id: 1,
    description: "Program Node app", 
    completed: false    
}, {
    id: 2,
    description: "Wash dishes",
    completed: false
}, {
    id: 3,
    description: "Do Taxes",
    completed: true
}];

app.get('/', function(req,res) {
    res.send("Todo API Root");
});

app.get('/todos', function(req, res) {
    res.json(todos);
});

app.get('/todos/:id', function(req, res) {
    var todoId = Number(req.params.id);
    var foundId;
    for(var item of todos) {
        if (item.id === todoId) {
            foundId = item;
        }
    }
    if (foundId) {
        res.json(foundId);
    } else {
        res.status(404).send();
    }
});

app.listen(PORT, function() {
    console.log(`Express listening on port ${PORT}...`);
});
   
