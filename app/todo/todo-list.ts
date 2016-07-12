import {Component,Input} from "@angular/core";
import {TodoService} from "./todo-service";
import {TodoItemRender} from "./todo-item-render";
import {SearchPipe} from "./search-pipe";
import {StartedPipe} from "./started-pipe";

@Component({
    selector:'todo-list',
    directives:[TodoItemRender],
    pipes:[StartedPipe,SearchPipe],
    template:`
            <div class="panel panel-default">
              <div class="panel-body">
                <!--- todo-list--->
                 <ul>
                    <li *ngFor="let todo of todoService.todos | started : status | search : term ">
                      <todo-item-render
                      (toggle)="todoService.toggleToDo($event)"
                      [todo]="todo">
                      </todo-item-render>
                    </li>
                 </ul>
                <!--- todo-list--->
              </div>
            </div>
            
    `
})

export class TodoList{
    @Input() status;
    @Input() term;

    constructor(public todoService:TodoService){
        console.log("todoService.todos:" , todoService.todos);
        console.log("status" , this.status);
        console.log("term" , this.term);
    }

    updateTest(_val){

        console.log("_val " , _val)
        this.todoService.filterArray(_val);
    }






};


