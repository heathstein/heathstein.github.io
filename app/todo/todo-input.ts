/**
 * Created by 212544474 on 2/4/2016.
 */
import {Component} from "@angular/core";
import {TodoService} from "./todo-service";
import {AlertService} from "../utilites/alerts/alert-service";
import {TodoModel} from "./todo-model";

@Component({
    selector:'todo-input',
    template:`<div>
    <form>
        <div class="input-group " style="margin-bottom: 8px;">    
                     <input (keydown)="onEnter($event)" type="text" [(ngModel)]="todoModel.title"  placeholder="add todo" class="form-control input-sm">
                     <span (click)="addTodo()" class="btn-success  input-group-addon"><i class="fa fa-plus"></i></span>
        </div>
    </form>
    </div>`,
})
// componentServices: [TodoService] //IF WE DO NOT HAVE TodoService Injected Globally ex(bootstrap(MyAppComponent,  [TodoService])



export class TodoInput{
    todoModel:TodoModel = new TodoModel();

    constructor(public todoService:TodoService,public alertService:AlertService){
        console.log(todoService);
        console.log(alertService);

    }

    onEnter($event){
        console.log("test")
        if($event.keyCode === 13 ){
            this.addTodo();
        }
    }

    addTodo(){
        //old - this.todoService.todos.push(this.todoModel)
        if(this.todoModel.title.length > 0 ){
            this.alertService.addAlert('success',`Todo {{this.todoModel.title}} Item was added`,6000,true);
            this.todoService.addTodo(this.todoModel) //added new method
            this.todoModel = new TodoModel();
        }else{
            this.alertService.addAlert('danger','Please add name before submitting!',3000,true);
        }


        //this.alertService.alerts.push({msg: 'You added a TODO!', type: 'warning', closable: true});





        console.log('this.todoModel: ' , this.todoModel)
        console.log('this.alertService: ' , this.alertService)
    }

}
