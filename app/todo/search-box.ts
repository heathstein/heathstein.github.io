/**
 * Created by 212544474 on 2/5/2016.
 */
import {Component,Output,EventEmitter} from "@angular/core";

@Component({
    selector: 'search-box',
    template: `<div style="margin-bottom: 8px;">
       
          <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-search"></i></span>
                <input #input  type="text" placeholder="search todo list" class="form-control input-sm" (input)="update.emit(input.value)"  id="inputGroupSuccess2" aria-describedby="inputGroupSuccess2Status">
              </div>
       
      </div>`
})

export class SearchBox{
    @Output() update = new EventEmitter();
    ngOnInit(){
        this.update.emit("");
    }
}

