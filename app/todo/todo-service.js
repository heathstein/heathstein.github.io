"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var todo_model_1 = require("./todo-model");
var TodoService = (function () {
    function TodoService() {
        this.todos = [
            new todo_model_1.TodoModel("eat"),
            new todo_model_1.TodoModel("sleep"),
            new todo_model_1.TodoModel("code"),
            new todo_model_1.TodoModel("dance", "completed"),
            new todo_model_1.TodoModel("party", "completed"),
            new todo_model_1.TodoModel("play"),
            new todo_model_1.TodoModel("swim"),
            new todo_model_1.TodoModel("train", "completed"),
            new todo_model_1.TodoModel("record", "completed"),
            new todo_model_1.TodoModel("charm"),
        ];
    }
    TodoService.prototype.filterArray = function (value) {
        console.log("TodoService : ", value);
        this.todos = [new todo_model_1.TodoModel("SO WHAT"),];
    };
    TodoService.prototype.addTodo = function (todo) {
        //now each time we add a ToDoModel we will create a new array. This is to use our Pipe functions. because a pipe expects a new array not a changed one
        //this is a huge performance boost. because now angular doesn't have to check for change to an array constantly
        this.todos = this.todos.concat([todo]); //... spread operator. spreads array like a butter knofe
    };
    TodoService.prototype.toggleToDo = function (todo) {
        todo.toggle();
        //This is also done so that the pipe filter will see that the array has changed. Performance over A1.x
        var i = this.todos.indexOf(todo);
        console.log("todo: ", todo, " : ", i);
        this.todos = this.todos.slice(0, i).concat([todo], this.todos.slice(i + 1));
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo-service.js.map