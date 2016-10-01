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
import {RandomCollision} from "./random-collision";

@Component({
    selector:'random-collision-page',
    directives: [RandomCollision],
    template:`
   
        <div class="panel panel-primary" style="margin:10px 0px 0px 0px">
        <div class="panel-heading">
        <h3 class="panel-title">Random Particle Collision</h3>
        </div>
        <div class="panel-body">
          <random-collision></random-collision>
        </div>
        </div>`

})

export class RandomCollisionPage {

    constructor() {

    }

}