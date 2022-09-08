module.exports.addTask = function(req, res) {

    import { todoList } from '../index';

    todoList.push(req.body);
    console.log(todoList);

}