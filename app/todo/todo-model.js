"use strict";
var TodoModel = (function () {
    function TodoModel(title, status) {
        if (title === void 0) { title = ""; }
        if (status === void 0) { status = "started"; }
        this.title = title;
        this.status = status;
    }
    TodoModel.prototype.toggle = function () {
        this.status = this.status == "started" ? "completed" : "started";
    };
    TodoModel.prototype.delete = function () {
    };
    return TodoModel;
}());
exports.TodoModel = TodoModel;
//# sourceMappingURL=todo-model.js.map