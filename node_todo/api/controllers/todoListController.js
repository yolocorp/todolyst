var Todo = require('../models/todoModel');

exports.list_todos = function(req, res) {
    res.json(req.session.todos);
};

exports.create_todo = function(req, res) {
    task = req.body.task? req.body.task : null;
    status = req.body.status? req.body.status : null;
    if(task && status) {
        req.session.todos.push(new Todo(task, status));
        res.json("created.");
    } else {
        res.json("Wrong inputs. TASK and STATUS parameters required.");
    }
};

exports.get_todo = function(req, res) {
    id = req.params.id? parseInt(req.params.id) : null;
    if(id) {
        todo = undefined;
        for(i = 0; i < req.session.todos.length; i++) {
            if(req.session.todos[i].id === id) {
                todo = req.session.todos[i];
                break;
            }
        }
        if(todo)
            res.json(todo);
        else
            res.json("No todo found.")
    } else {
        res.json("Wrong inputs. ID parameter required.")
    }
}

exports.update_todo = function(req, res) {
    id = req.params.id? parseInt(req.params.id) : null;
    task = req.body.task? req.body.task : null;
    status = req.body.status? req.body.status : null;
    if(id) {
        if(task && status) {
            message = "No todo found.";
            for (i = 0; i < req.session.todos.length; i++) {
                if (req.session.todos[i].id === id) {
                    req.session.todos[i].task = task;
                    req.session.todos[i].status = status;
                    message = "Updated.";
                    break;
                }
            }
            res.json(message);
        } else {
            res.json("Wrong inputs. TASK and STATUS parameters required.");
        }
    } else {
        res.json("Wrong inputs. ID parameter required.")
    }
}

exports.delete_todo = function(req, res) {
    id = req.params.id? parseInt(req.params.id) : null;
    if(id) {
        index = undefined;
        for(i = 0; i < req.session.todos.length; i++) {
            if(req.session.todos[i].id === parseInt(id)) {
                index = i;
                break;
            }
        }
        if(index) {
            req.session.todos.splice(index, 1);
            res.json("Deleted.");
        }
        else
            res.json("No todo found.")
    } else {
        res.json("Wrong inputs. ID parameter required.")
    }
}