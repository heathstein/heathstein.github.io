
/**
 * Created by 212544474 on 2/1/2016.
 */
/*
 * Angular
 */
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES,Router} from '@angular/router';


@Component({
    directives: [ROUTER_DIRECTIVES],
    styles: ['nav { border:1px solid #CCCCCC ; padding:4px;}' ],
    template: `
    <div class="superhero-area">
    <router-outlet></router-outlet>
    </div>`
})



export class Superheros{
        constructor() {

        }
}