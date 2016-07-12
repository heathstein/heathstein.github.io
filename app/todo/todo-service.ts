    import {Injectable} from "@angular/core";
    import {TodoModel} from "./todo-model";

    @Injectable()
    export class TodoService{
        todos = [
            new TodoModel("eat"),
            new TodoModel("sleep"),
            new TodoModel("code"),
            new TodoModel("dance","completed"),
            new TodoModel("party","completed"),
            new TodoModel("play"),
            new TodoModel("swim"),
            new TodoModel("train","completed"),
            new TodoModel("record","completed"),
            new TodoModel("charm"),
        ];




        filterArray(value){
                console.log("TodoService : " , value )
                this.todos = [new TodoModel("SO WHAT"), ]
        }


        addTodo(todo:TodoModel):void{
            //now each time we add a ToDoModel we will create a new array. This is to use our Pipe functions. because a pipe expects a new array not a changed one
            //this is a huge performance boost. because now angular doesn't have to check for change to an array constantly
            this.todos = [...this.todos, todo] //... spread operator. spreads array like a butter knofe
        }





        toggleToDo(todo:TodoModel){


            todo.toggle();
            //This is also done so that the pipe filter will see that the array has changed. Performance over A1.x
            const i = this.todos.indexOf(todo);
            console.log("todo: " , todo , " : " , i );
            this.todos = [...this.todos.slice(0,i), todo, ...this.todos.slice(i + 1)]


        }


    }