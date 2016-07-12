/**
 * Created by 212544474 on 2/5/2016.
 */
import {Pipe} from "@angular/core";

@Pipe({
    name:"started"
})


export class StartedPipe{

    transform(value, status ) {
        return value.filter(item => item.status === status);
    }

}


