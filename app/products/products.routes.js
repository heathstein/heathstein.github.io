"use strict";
var products_1 = require('./products');
var product_admin_1 = require('./product.admin');
var product_1 = require('./product');
var product_list_1 = require('./product.list');
exports.ProductRoutes = [
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: products_1.Products,
        children: [
            {
                path: 'admin',
                component: product_admin_1.ProductAdmin,
            },
            {
                path: ':id',
                component: product_1.Product,
            },
            {
                path: '',
                component: product_list_1.ProductList,
            }
        ]
    }
];
//# sourceMappingURL=products.routes.js.map