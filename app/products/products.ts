/*
 * Angular
 */
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES,Router} from '@angular/router';


@Component({
    selector: 'products',
    directives: [ROUTER_DIRECTIVES],
    styles: ['nav { border:1px solid #CCCCCC ; padding:4px;}' ],
    template: `
   <nav>
      <a [routerLink]="['./']">Products</a> | 
      <a [routerLink]="['./admin']">Admin</a> | 
       Enter id: <input #id size="6">
       <button (click)="goToProduct(id.value)">Go</button>
    </nav>
  

  <div class="products-area">
    <router-outlet></router-outlet>
  </div>
  `
})

export class Products {

    constructor(public router: Router) {
    }

    goToProduct(id: string): void {
        this.router.navigate(['/products', id]);
    }
}
