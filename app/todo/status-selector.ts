/**
 * Created by 212544474 on 2/5/2016.
 */
import {Component,Output,EventEmitter} from "@angular/core"



@Component({
        selector:'status-selector',
        template:`<div style="margin-bottom: 8px">
        <select class="form-control input-sm" (change)="select.emit($event.target.value)" >
        <option *ngFor="let status of statuses">{{status}}</option>
        </select>
        </div>`
})

export class StatusSelector{
    @Output() select = new EventEmitter();
    statuses = ["started","completed"];

    ngOnInit(){

        console.log("this.statuses[0] :" , this.statuses[0])

        this.select.emit(this.statuses[0]);
        console.log("when am i called:  ngOnInit(){ " , this.statuses[0] )
    }

}

