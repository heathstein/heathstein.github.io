/**
 * Created by 212544474 on 2/5/2016.
 */
import {Pipe} from "@angular/core";


@Pipe({
    name:"search"
})


export class SearchPipe{
    transform(value, term){
         var list = value.filter((item)=> item.title.startsWith(term))
         return list;
    }
}


