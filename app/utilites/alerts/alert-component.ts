/**
 * Created by 212544474 on 2/12/2016.
 */
import {Component} from "@angular/core";
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { AlertService } from './alert-service';



@Component({
    selector:'app-alerts',
    directives: [AlertComponent],
    host: {'class': 'alert-holder'},
    template:`<alert *ngFor="let alert of alertService.alerts; let i = index" dismissOnTimeout="{{alert.closeTime}}" [type]="alert.type" dismissible="true" (close)="closeAlert(i)">
              {{ alert?.message }}
              </alert>`
})



export class AlertComponents{

    alerts:Array<any>;

    constructor(public alertService:AlertService){
       this.alerts = this.alertService.getAlerts();
        console.log("---------------------------app-alerts  " ,  this.alerts)
    }

    getAlerts(){

        this.alerts = this.alertService.alerts;
       // this.alerts = ["test"]
        console.log("this.alerts " , this.alerts);
        console.log( this.alerts[0].message );
    }


    closeAlert(i:number) {
        console.log("i====================: ", i)
        this.alertService.alerts.splice(i, 1);
    }


}



/*


<alert dismissOnTimeout="3000">This alert will dismiss in 3s</alert>

<button type="button" class='btn btn-primary' (click)="addAlert()">Add Alert</button>
*/