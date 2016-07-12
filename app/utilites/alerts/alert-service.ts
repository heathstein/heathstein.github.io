/**
 * Created by 212544474 on 2/12/2016.
 */
import {Injectable} from "@angular/core";
import {AlertModel} from "./alert-model";

@Injectable()
export class AlertService{


    alerts:Array<Object>  = [
       // new AlertModel("danger","This my message",3000,true),
    ];


    getAlerts(){
       return this.alerts;
    }


    addAlert(type,msg,time,close){
       this.alerts.push(new AlertModel(type,msg,time,close));
    }




    closeAlert(){

    }



}