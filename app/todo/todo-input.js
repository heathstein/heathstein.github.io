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
/**
 * Created by 212544474 on 2/4/2016.
 */
var core_1 = require("@angular/core");
var todo_service_1 = require("./todo-service");
var alert_service_1 = require("../utilites/alerts/alert-service");
var todo_model_1 = require("./todo-model");
var TodoInput = (function () {
    function TodoInput(todoService, alertService) {
        this.todoService = todoService;
        this.alertService = alertService;
        this.todoModel = new todo_model_1.TodoModel();
        console.log(todoService);
        console.log(alertService);
    }
    TodoInput.prototype.onEnter = function ($event) {
        console.log("test");
        if ($event.keyCode === 13) {
            this.addTodo();
        }
    };
    TodoInput.prototype.addTodo = function () {
        //old - this.todoService.todos.push(this.todoModel)
        if (this.todoModel.title.length > 0) {
            this.alertService.addAlert('success', "Todo {{this.todoModel.title}} Item was added", 6000, true);
            this.todoService.addTodo(this.todoModel); //added new method
            this.todoModel = new todo_model_1.TodoModel();
        }
        else {
            this.alertService.addAlert('danger', 'Please add name before submitting!', 3000, true);
        }
        //this.alertService.alerts.push({msg: 'You added a TODO!', type: 'warning', closable: true});
        console.log('this.todoModel: ', this.todoModel);
        console.log('this.alertService: ', this.alertService);
    };
    TodoInput = __decorate([
        core_1.Component({
            selector: 'todo-input',
            template: "<div>\n    <form>\n        <div class=\"input-group \" style=\"margin-bottom: 8px;\">    \n                     <input (keydown)=\"onEnter($event)\" type=\"text\" [(ngModel)]=\"todoModel.title\"  placeholder=\"add todo\" class=\"form-control input-sm\">\n                     <span (click)=\"addTodo()\" class=\"btn-success  input-group-addon\"><i class=\"fa fa-plus\"></i></span>\n        </div>\n    </form>\n    </div>",
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService, alert_service_1.AlertService])
    ], TodoInput);
    return TodoInput;
}());
exports.TodoInput = TodoInput;
//# sourceMappingURL=todo-input.js.map