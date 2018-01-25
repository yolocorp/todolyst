module.exports = function paginator(todoArray, page, perPage)
{
    var returnArray = {};
    if(page > 0 && perPage > 0) {

        var numberTodos = todoArray.length;
        var numberPages = (numberTodos > 0)? Math.ceil(numberTodos / perPage) : 1;

        var indexFirstTodo = (page - 1) * perPage;
        var indexLastTodo = ((indexFirstTodo + perPage - 1) < numberTodos) ? indexFirstTodo + perPage - 1 : numberTodos - 1;
        var todosArray = [];

        for (var i = indexFirstTodo; i <= indexLastTodo; i++) {
            todosArray.push(todoArray[i]);
        }
        returnArray["todos"] = todosArray;
        returnArray["totalPages"] = numberPages;
        returnArray["currentPage"] = page;

    } else {
        returnArray["error"] = "Wrong inputs, check page number & per page number.";
    }
    return returnArray;
}