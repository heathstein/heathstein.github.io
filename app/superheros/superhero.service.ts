import { Injectable } from '@angular/core';
import {Hero} from './hero';

let SUPERHEROS = [
    new Hero(1,"Superman","All","1087","6'1","1200"),
    new Hero(2,"The Incredible Hulk","Strength","54","6'4","550"),
    new Hero(3,"Batman","Inventiveness","44","6'1","210")
];

let int = 3;

let superheroPromise = Promise.resolve(SUPERHEROS);
@Injectable()
export class SuperheroService {




    getSuperHeros() { return superheroPromise; }

    getSuperHero(id: number) {
        return superheroPromise
            .then(heros => heros.find(hero => hero.id === id));
    }

    addHero(hero:Hero){
        int++;
        hero.id = int;
        SUPERHEROS.push(hero);
    }

    updateHero(hero:Hero){
        var index = SUPERHEROS.indexOf(hero);

        var goodIndex = _.findIndex(SUPERHEROS, {'id' : hero.id} );

        console.log("goodIndex : " , goodIndex);
        console.log("index : " , index)
        console.log(hero)

        SUPERHEROS[goodIndex] = hero;
    }


    deleteHero(hero:Hero){
        var index = SUPERHEROS.indexOf(hero);
        SUPERHEROS.splice(index, 1);
    }

}