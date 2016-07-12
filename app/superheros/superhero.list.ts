/**
 * Created by heathstein on 7/10/16.
 */


import { Component, OnInit }   from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { SuperheroService } from './superhero.service';
import { Hero } from './hero';


@Component({
    directives: [],
    providers:[SuperheroService],
    templateUrl: "app/superheros/superheroLists.html"
})


export class SuperheroList implements OnInit{
    
    loading: boolean;
    heros: Hero[];

    constructor(public http: Http,  private router: Router, private service:SuperheroService ) {

    }


    ngOnInit() {
       // this.makeRequest();
        this.service.getSuperHeros().then(heros => this.heros = heros);
    }


    /*
    makeRequest(): void {
        let url = "json/people.json";
        // let url = 'http://jsonplaceholder.typicode.com/posts/1';
        this.loading = true;
        var self = this;
        this.http.request(url)
            .subscribe((res: Response) => {
                this.data = res.json();
                console.log("------------------------------------: " , this.data)
                this.loading = false;
            });
    }
    */


    edit(item: string): void {
        console.log("item:" , item)
        //this.router.navigate(['./EditItem', {id: item.id}]);
    }


    logError(error){
        console.log(error)
    }

    logData(data){
        console.log(data)
        this.data = data;
    }

    editSuperhero(id:number){
        this.router.navigate(['/superheros', id]);
    }

    addSuperhero(){


        this.router.navigate(['/superheros/add']);

       /* var newUser = {"id": 0, "name": "Heath Stein"}
        console.log(this.data)
        this.data.push({
            "id": 3,
            "name": "New Superhero",
            "powers": "Coder",
            "age": 44,
            "height": "6'1",
            "weight": "210"
        }); */



    }

    removeHero(hero){
        console.log(hero);
        this.service.deleteHero(hero)
    }





}