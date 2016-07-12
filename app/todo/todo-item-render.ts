import {Component,Input,ViewEncapsulation,Output,EventEmitter} from "@angular/core"

//Input is like how we injected data in a directive via scope in angular 1.x


@Component({
    encapsulation: ViewEncapsulation.Native, // 1:ViewEncapsulation.Emulated 2:ViewEncapsulation.None 3:ViewEncapsulation.Native
    selector:'todo-item-render',
    template: `
    <style>
        .completed{
            text-decoration: line-through;
        }
    </style>
    <span [ngClass] = "todo.status">{{todo.title}}</span>
    <button (click)="toggle.emit(todo)">Toggle</button>`
})

export class TodoItemRender{
    @Input()todo;
    @Output() toggle: EventEmitter<any> = new EventEmitter();
    constructor() {

    }



};


