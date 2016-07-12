/**
 * Created by heathstein on 7/9/16.
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
//import { Router, ActivatedRoute }       from '@angular/router';

@Component({
    selector: 'product-admin',
    directives: [],
    template: `<h2>Product Admin</h2>`
})
export class ProductAdmin {
    id: string;
    constructor(/*public routeParams: RouteParams*/) {
        // this.id = routeParams.get('id');
    }
}

