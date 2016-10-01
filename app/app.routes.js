"use strict";
/**
 * Created by heathstein on 7/7/16.
 */
var router_1 = require('@angular/router');
var home_1 = require('./home/home');
var tictactoe_page_1 = require('./tictactoe/tictactoe-page');
var random_collision_page_1 = require('./random-collision/random-collision-page');
var canvas_art_1 = require('./canvas-art/canvas-art');
var products_routes_1 = require('./products/products.routes');
var superhero_routes_1 = require('./superheros/superhero.routes');
exports.routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: 'home', component: home_1.Home },
    { path: 'particle-swarm', component: canvas_art_1.CanvasArt },
    { path: 'tictactoe', component: tictactoe_page_1.TicTacToePage },
    { path: 'random-collision', component: random_collision_page_1.RandomCollisionPage }
].concat(products_routes_1.ProductRoutes, superhero_routes_1.SuperherosRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map