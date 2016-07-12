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
var core_1 = require('@angular/core');
var ProductModel = (function () {
    function ProductModel(id, name, imgUrl, desc, price, inStock) {
        this.id = id;
        this.name = name;
        this.imgUrl = imgUrl;
        this.desc = desc;
        this.price = price;
        this.inStock = inStock;
    }
    return ProductModel;
}());
exports.ProductModel = ProductModel;
var PRODUCTS = [
    new ProductModel(1, 'Mac Pro', 'assets/img/products/macpro.jpg', 'Engineered around workstation graphics with dual GPUs, PCIe-based flash storage, high-performance Thunderbolt 2, new-generation Xeon processors, ultrafast memory, and support for 4K video, the new Mac Pro delivers state-of-the-art performance across the board.', 3123.43, 3),
    new ProductModel(2, 'Apple Thunderbolt Display 27 inch', 'assets/img/products/HA243.jpeg', 'Thunderbolt is a revolutionary I/O technology that supports high-resolution displays and high-performance data devices through a single, compact port. It dramatically redefines the idea of expansion.', 1113.43, 4),
    new ProductModel(3, 'MacBook Pro', 'assets/img/products/macbook-pro.jpg', 'A groundbreaking Retina display. A new force-sensing trackpad. All-flash architecture. Powerful dual-core and quad-core Intel processors. Together, these features take the notebook to a new level of performance. And they will do the same for you in everything you create.', 1999.13, 5),
    new ProductModel(4, 'Tiga R22 (wakeboard boat)', 'assets/img/products/Ckg-r5wWUAABK6E.jpg', "The R-Series offers Tige's tradition of innovation and quality with a pocket friendly price tag. Built on Tige's patented Convex V Hull, the R-Series models will perform flawlessly whether you're wakesurfing, wakeboarding, waterskiing, or just cruising the lake. You can count on the R-Series models to deliver on their value time and time again.", 98023.43, 0),
    new ProductModel(5, '2016 RM-Z450', 'assets/img/products/rm450.jpg', 'bThe RM-Z450 continues to evolve for 2016, delivering a higher level of performance while maintaining the great balance of the current model. The 449cc 4-stroke liquid-cooled DOHC 4-valve fuel-injected engine along with new performance upgrades straight from the factory is the reason why champions choose Suzuki!', 8912.43, 6)
];
var productsPromise = Promise.resolve(PRODUCTS);
var ProductsService = (function () {
    function ProductsService() {
    }
    ProductsService.prototype.getProducts = function () { return productsPromise; };
    ProductsService.prototype.getProduct = function (id) {
        return productsPromise
            .then(function (products) { return products.find(function (product) { return product.id === +id; }); });
    };
    ProductsService.prototype.getNext = function (id) {
        if (id === PRODUCTS.length) {
            return id;
        }
        return id + 1;
    };
    ProductsService.prototype.getPrevious = function (id) {
        if (id === 1) {
            return 1;
        }
        return id - 1;
    };
    ProductsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ProductsService);
    return ProductsService;
}());
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map