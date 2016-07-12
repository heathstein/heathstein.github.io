/**
 * Created by 212544474 on 2/12/2016.
 */
import {Component} from "@angular/core";
import {TodoInput} from './todo-input';
import {TodoList} from './todo-list';
import {TodoService} from './todo-service';
import {StatusSelector} from './status-selector';
import {SearchBox} from './search-box';
import { Inject } from '@angular/core';



@Component({
    selector:'todo-component',
    directives: [TodoInput,TodoList,StatusSelector,SearchBox],
    template:`
    <div class="panel panel-primary">
      <div class="panel-heading">Todo List Component</div>
      <div class="panel-body">
       <!--- todo components --->
                    <search-box (update)="term = $event"></search-box>
                    <todo-input></todo-input>
                    <status-selector (select)="status = $event"></status-selector>
                    <todo-list [status]="status" [term]="term"></todo-list>
        <!--- todo components --->
      </div>
    </div>`,
})
// componentServices: [TodoService] //IF WE DO NOT HAVE TodoService Injected Globally ex(bootstrap(MyAppComponent,  [TodoService])



export class Todo{

    constructor(@Inject(TodoService) TodoService) {
            console.log("TodoService" , TodoService)

    }

}