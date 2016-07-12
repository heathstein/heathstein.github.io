"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var header_1 = require('./layout/header/header');
//import {Todo} from './todo/todo';
var todo_service_1 = require('./todo/todo-service');
var alert_service_1 = require('./utilites/alerts/alert-service');
var alert_component_1 = require('./utilites/alerts/alert-component');
var app_routes_1 = require('./app.routes');
var core_2 = require('@angular/core');
var MyAppComponent = (function () {
    function MyAppComponent() {
        console.log("Header", header_1.Header);
        //console.log();
    }
    MyAppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "app/app.html",
            // directives: [Navigation,SuperForm,Statistics,FooterContent,ROUTER_DIRECTIVES,RouterLink, RouterOutlet]
            directives: [header_1.Header, router_1.ROUTER_DIRECTIVES, alert_component_1.AlertComponents]
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
}());
core_2.enableProdMode();
platform_browser_dynamic_1.bootstrap(MyAppComponent, [
    todo_service_1.TodoService,
    alert_service_1.AlertService,
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=app.js.map