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
//Input is like how we injected data in a directive via scope in angular 1.x
var TodoItemRender = (function () {
    function TodoItemRender() {
        this.toggle = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TodoItemRender.prototype, "todo", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], TodoItemRender.prototype, "toggle", void 0);
    TodoItemRender = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.Native,
            selector: 'todo-item-render',
            template: "\n    <style>\n        .completed{\n            text-decoration: line-through;\n        }\n    </style>\n    <span [ngClass] = \"todo.status\">{{todo.title}}</span>\n    <button (click)=\"toggle.emit(todo)\">Toggle</button>"
        }), 
        __metadata('design:paramtypes', [])
    ], TodoItemRender);
    return TodoItemRender;
}());
exports.TodoItemRender = TodoItemRender;
;
//# sourceMappingURL=todo-item-render.js.map