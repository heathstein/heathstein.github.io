/**
 * Created by heathstein on 9/18/16.
 */
/**
 * Created by 212544474 on 2/23/2016.
 */
/**
 * Created by 212544474 on 2/12/2016.
 */
import {Component,Inject} from "@angular/core";
import {CanvasArt} from "./canvas-art";

@Component({
    selector:'canvas-art-page',
    directives: [CanvasArt],
    template:`
   
        <div class="panel panel-primary" style="margin:10px 0px 0px 0px">
        <div class="panel-heading">
        <h3 class="panel-title">Particle Swarm</h3>
        </div>
        <div class="panel-body">
          <canvas-art></canvas-art>
        </div>
        </div>`

})

export class CanvasArtPage {

    constructor() {

    }

}