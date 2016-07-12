/**
 * Created by 212544474 on 2/15/2016.
 */
/**
 * Created by 212544474 on 2/15/2016.
 */
/*
 * Angular
 */
import {Component} from '@angular/core';
//import {RouteParams} from '@angular/router';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { Router, ActivatedRoute }       from '@angular/router';
import {Hero} from './hero';
import { SuperheroService } from './superhero.service';
import * as _ from 'lodash';

@Component({
    selector: 'edit',
    directives: [ROUTER_DIRECTIVES],
    providers:[SuperheroService],
    template:`
<div class="panel panel-primary">
    <div class="panel-heading">Edit Superhero</div>
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

                <div class="btn btn-sm btn-info" (click)="updateSuperHero(hero)">Update Superhero</div>
                <div class="btn btn-sm btn-warning" (click)="goToSuperheros()">Cancel</div>


                </div>

            </div>
        </form>
        <!--- FROM --->
    </div>
</div>

`
})
export class SuperheroEdit {
    id: string;
    public hero:Hero;
    public title:String = "Edit Superhero";

    constructor( private route: ActivatedRoute, public router: Router, private service:SuperheroService) {
       // this.id = routeParams.get('id');
    }


    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            var that = this;
            this.service.getSuperHero(id).then(
                hero => that.setUpHero(_.cloneDeep(hero))
            );

        });
    }


    setUpHero(hero){
        console.log(hero)
        this.hero = hero;
    }


    updateSuperHero(hero){
        console.log(hero)
        this.service.updateHero(hero);
        this.router.navigate(['/superheros']);
    }
    
    goToSuperheros(): void {
        this.router.navigate(['/superheros']);
    }
}
