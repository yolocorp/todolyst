module.exports = function(app, cors) {
    var todoList = require('../controllers/todoListController');

    //Routes
    app.get('/todos', todoList.list_todos)
        .post('/todos', todoList.create_todo);

    app.get('/todos/:id', todoList.get_todo)
        .post('/todos/:id', todoList.update_todo)
        .delete('/todos/:id', todoList.delete_todo);
};