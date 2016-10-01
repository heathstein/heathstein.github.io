import { bootstrap }    from '@angular/platform-browser-dynamic';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Inject } from '@angular/core';
import {Component,provide,EventEmitter} from '@angular/core';
import {Header} from './layout/header/header';
import {Home} from './home/home';
//import {Todo} from './todo/todo';
import {TodoService} from './todo/todo-service';
import {AlertService} from './utilites/alerts/alert-service';
import {AlertComponents} from './utilites/alerts/alert-component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import {enableProdMode} from '@angular/core';



@Component({
  selector: 'my-app',
  templateUrl: "app/app.html",
 // directives: [Navigation,SuperForm,Statistics,FooterContent,ROUTER_DIRECTIVES,RouterLink, RouterOutlet]
  directives: [Header,ROUTER_DIRECTIVES,AlertComponents]
})




class MyAppComponent {
  constructor() {
    //console.log();
  }


}
enableProdMode();
bootstrap(MyAppComponent,  [
  TodoService,
  AlertService,
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS
]);