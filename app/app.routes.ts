/**
 * Created by heathstein on 7/7/16.
 */
import { provideRouter, RouterConfig } from '@angular/router';
import {Home} from './home/home';
import {TicTacToePage} from './tictactoe/tictactoe-page';
import {RandomCollisionPage} from './random-collision/random-collision-page';
import {CanvasArtPage} from './canvas-art/canvas-art-page';
import {ProductRoutes} from './products/products.routes';
import {ExplodedTiles} from './exploded-tiles/exploded-tiles';
import {SuperherosRoutes} from './superheros/superhero.routes';


export const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'home', component: Home },
    { path: 'particle-swarm', component: CanvasArtPage },
    { path: 'exploded-tiles', component: ExplodedTiles },

    { path: 'tictactoe', component: TicTacToePage },
    { path: 'random-collision', component: RandomCollisionPage },
    ...ProductRoutes,
    ...SuperherosRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];



