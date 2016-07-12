/**
 * Created by heathstein on 7/7/16.
 */
import { provideRouter, RouterConfig } from '@angular/router';
import {Home} from './home/home';
import {TicTacToePage} from './tictactoe/tictactoe-page';
import {CanvasArt} from './canvas-art/canvas-art';
import {ProductRoutes} from './products/products.routes';
import {SuperherosRoutes} from './superheros/superhero.routes';

export const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'home', component: Home },
    { path: 'particle-swarm', component: CanvasArt },
    { path: 'tictactoe', component: TicTacToePage },
    ...ProductRoutes,
    ...SuperherosRoutes
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];


