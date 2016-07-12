/**
 * Created by 212544474 on 2/12/2016.
 */
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
    selector: 'navigation',
    host: {'class': 'gt-top-nav pull-right'},
    directives: [ROUTER_DIRECTIVES],
    template: `<ul class="gt-header-nav">
        <li [routerLink]="['/home']"><a class="active" >Home</a><div class="gt-badge badge-xs badge-green">3</div></li>
        <li [routerLink]="['/products']"><a class="" >Products</a><div class="gt-badge badge-xs badge-blue">12</div></li>
        <li [routerLink]="['/particle-swarm']"><a class="" >Particle Swarm</a><div class="gt-badge badge-xs badge-blue">12</div></li>
        <li [routerLink]="['/tictactoe']"><a class="" >Tic Tac Toe</a><div class="gt-badge badge-xs badge-blue">12</div></li>
        <li [routerLink]="['/superheros']"><a class="" >Superheros</a><div class="gt-badge badge-xs badge-red">1</div></li>
    </ul>`
})
export class Navigation {
    constructor() {
       // console.log("test: " , $('.tooltipped') );
    }
}

