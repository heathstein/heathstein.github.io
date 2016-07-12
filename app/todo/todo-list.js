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
var todo_service_1 = require("./todo-service");
var todo_item_render_1 = require("./todo-item-render");
var search_pipe_1 = require("./search-pipe");
var started_pipe_1 = require("./started-pipe");
var TodoList = (function () {
    function TodoList(todoService) {
        this.todoService = todoService;
        console.log("todoService.todos:", todoService.todos);
        console.log("status", this.status);
        console.log("term", this.term);
    }
    TodoList.prototype.updateTest = function (_val) {
        console.log("_val ", _val);
        this.todoService.filterArray(_val);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TodoList.prototype, "status", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TodoList.prototype, "term", void 0);
    TodoList = __decorate([
        core_1.Component({
            selector: 'todo-list',
            directives: [todo_item_render_1.TodoItemRender],
            pipes: [started_pipe_1.StartedPipe, search_pipe_1.SearchPipe],
            template: "\n            <div class=\"panel panel-default\">\n              <div class=\"panel-body\">\n                <!--- todo-list--->\n                 <ul>\n                    <li *ngFor=\"let todo of todoService.todos | started : status | search : term \">\n                      <todo-item-render\n                      (toggle)=\"todoService.toggleToDo($event)\"\n                      [todo]=\"todo\">\n                      </todo-item-render>\n                    </li>\n                 </ul>\n                <!--- todo-list--->\n              </div>\n            </div>\n            \n    "
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoList);
    return TodoList;
}());
exports.TodoList = TodoList;
;
//# sourceMappingURL=todo-list.js.map