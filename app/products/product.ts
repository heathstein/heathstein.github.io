/**
 * Created by heathstein on 7/9/16.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import { ProductModel, ProductsService }   from './products.service';

@Component({
    selector: 'product',
    directives: [],
    providers: [ProductsService],
    template: `
  <div *ngIf="product" style="height:auto; overflow:hidden">
  
  <h4 style="margin:10px 0px 10px 0px; border-bottom:1px solid #CCCCCC">Product: {{product.name}}</h4> 
    
  <div class="pull-left" style="margin-right:20px">
        <img src="{{product.imgUrl}} " width="280px">
  </div>
  
  <div >
    
    <div style="height: auto; overflow: hidden; margin-bottom:5px">
        <div (click)="previous(product.id)" class="pull-left"><i class="fa fa-arrow-left"></i>Previous </div>
        <div class="pull-left" style="margin:0px 2px 0px 2px;"> | </div>
        <div (click)="next(product.id)" class="pull-left"> Next <i class="fa fa-arrow-right"></i></div> 
    </div>  
       
     <p><b>Product Id:</b> {{product.id}}</p>
     <div [ngStyle]="{'color': color}"><b>InStock:</b> {{product.inStock}}</div> 
     <p>{{product.desc}}</p>
     <p><b>Price:</b> {{product.price}}</p>   
     <div class="btn btn-success" (click)="purchase($event)">Buy Now</div>
    
    </div> 
       
  </div>
  
  <div class="btn btn-info" style="margin-top:10px" (click)="gotoProducts($event)">Back To All Products</div>
  `
})

export class Product implements OnInit, OnDestroy {

    private sub: any;
    private product: ProductModel;
    private color = 'green';
   // private product;


    constructor(private route: ActivatedRoute, private router: Router, private service: ProductsService) {}


    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            var that = this;
            this.service.getProduct(id).then(
                product => that.setUpProduct(product)
            );

        });
    }


    setUpProduct(product){
        if(!product) {
            this.gotoProducts();
        }
        this.product =  product;
        this.setColor();
    }



    setColor(){
        this.color='green' ;
        if(this.product.inStock  === 0)  {
             this.color='red' ;
        }
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


    gotoProducts($event) {
        console.log("$event" , $event )
        this.router.navigate(['/products']);
    }

    purchase($event){
        console.log("sjdasjdlsjfkjsdhfkjsdhfkldshfk")
    }

    previous(id){
        var newId = this.service.getPrevious(id);
        console.log("previous :::::::::::::::::::" , newId)
        this.router.navigate(['/products', newId]);
    }

   next(id){
       var newId = this.service.getNext(id);
       console.log("previous :::::::::::::::::::" , newId)
       //this.router.navigate(['/products', {id:newid}]);
       this.router.navigate(['/products', newId]);
    }

}

