/**
 * Created by heathstein on 7/9/16.
 */

import { Component, OnInit }   from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel, ProductsService }   from './products.service';

@Component({
    selector: 'product-admin',
    directives: [],
    providers: [ProductsService],
    template: `
 
 <style>
     .row-striped:nth-of-type(odd){
      background-color: #efefef;
    }
    
    .row-striped:nth-of-type(even){
      background-color: #ffffff;
    }
    
    .row{
    padding: 5px;
    }
</style>
 
 <div class="panel panel-primary" style="margin:10px 0px 0px 0px">
  <div class="panel-heading">
    <h3 class="panel-title">Product List</h3>
  </div>
  <div class="panel-body">
     <div class="container-fluid">  
      <div class="row row-striped" *ngFor="let product of products" (click)="onSelect(product)">
             <div class="col-xs-1"> <span class="badge">{{product.id}}</span> </div>
             <div class="col-md-1"><img src="{{product.imgUrl}}" width="60px"></div>
             <div class="col-md-3"> {{product.name}}</div>
             <div class="col-md-1">{{product.price}}</div>
      </div>
  </div>

  </div>
</div>
 
 
  
 
`
})


export class ProductList implements OnInit {
    id: string;
    products: ProductModel[];

    constructor(
        private router: Router,
        private service: ProductsService) { }

    ngOnInit() {
        this.service.getProducts().then(products => this.products = products);
    }

    onSelect(product: ProductModel) {
        this.router.navigate(['/products', product.id]);
    }



}

