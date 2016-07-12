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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by 212544474 on 2/12/2016.
 */
var core_1 = require("@angular/core");
var todo_input_1 = require('./todo-input');
var todo_list_1 = require('./todo-list');
var todo_service_1 = require('./todo-service');
var status_selector_1 = require('./status-selector');
var search_box_1 = require('./search-box');
var core_2 = require('@angular/core');
var Todo = (function () {
    function Todo(TodoService) {
        console.log("TodoService", TodoService);
    }
    Todo = __decorate([
        core_1.Component({
            selector: 'todo-component',
            directives: [todo_input_1.TodoInput, todo_list_1.TodoList, status_selector_1.StatusSelector, search_box_1.SearchBox],
            template: "\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">Todo List Component</div>\n      <div class=\"panel-body\">\n       <!--- todo components --->\n                    <search-box (update)=\"term = $event\"></search-box>\n                    <todo-input></todo-input>\n                    <status-selector (select)=\"status = $event\"></status-selector>\n                    <todo-list [status]=\"status\" [term]=\"term\"></todo-list>\n        <!--- todo components --->\n      </div>\n    </div>",
        }),
        __param(0, core_2.Inject(todo_service_1.TodoService)), 
        __metadata('design:paramtypes', [Object])
    ], Todo);
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map