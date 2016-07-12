/**
 * Created by 212544474 on 2/15/2016.
 */
/*
 * Angular
 */
import {Component} from '@angular/core';
import {Hero} from './hero';
import {ROUTER_DIRECTIVES,Router} from '@angular/router';
import { SuperheroService } from './superhero.service';

@Component({
    selector: 'add-superhero',
    directives: [ROUTER_DIRECTIVES],
    providers:[SuperheroService],
    template:`
<div class="panel panel-primary">
    <div class="panel-heading">Add Superhero</div>
    <div class="panel-body">
        <!--- FORM --->
        <form>
            <div class="form-group">
                <div *ngIf="hero" style="height:auto; overflow:hidden">
                <label for="">Superhero Name</label>
                <input type="text" [(ngModel)]="hero.name"   class="form-control">

                <label for="">Superhero Powers</label>
                <input type="text" [(ngModel)]="hero.powers"  class="form-control">

                <label for="">Superhero Age</label>
                <input type="text" [(ngModel)]="hero.age"  class="form-control">

                <label for="">Superhero Height</label>
                <input type="text" [(ngModel)]="hero.height"  class="form-control">

                <label for="">Superhero Weight</label>
                <input type="text" [(ngModel)]="hero.weight"  class="form-control">
                <hr>

                <div class="btn btn-sm btn-info" (click)="addSuperHero()">Add Superhero</div>
                <div class="btn btn-sm btn-warning" (click)="goToSuperheros()">Cancel</div>


                </div>

            </div>
        </form>
        <!--- FROM --->
    </div>
</div>`
})
export class SuperheroAdd {

    public hero:Hero;
    public title:String = "Add Superhero";

    constructor( private router: Router, private service:SuperheroService) {
        this.hero = new Hero(0,'','','','','');
    }


    addSuperHero(){
        console.log(this.hero)

        this.service.addHero(this.hero);
        this.goToSuperheros();
    }

    goToSuperheros(): void {
        this.router.navigate(['/superheros']);
    }


   

}
