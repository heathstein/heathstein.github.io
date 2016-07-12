/**
 * Created by 212544474 on 2/12/2016.
 */
export class AlertModel{



    // new AlertModel("danger","This my message",3000,true),


    constructor(public type = "", public message = "", public closeTime = 15000, public closable = true){

    }

    toggle():void{
       // this.status = this.status == "started" ? "completed" : "started";
      //  console.log("this:  " , this)
    }



}