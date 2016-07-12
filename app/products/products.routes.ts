/**
 * Created by heathstein on 7/9/16.
 */
import {RouterConfig} from '@angular/router';
import {Products} from './products';
import {ProductAdmin} from './product.admin';
import {Product} from './product';
import {ProductList} from './product.list';

export const ProductRoutes: RouterConfig = [
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: Products,
        children: [
            {
                path: 'admin',
                component: ProductAdmin,
            },
            {
                path: ':id',
                component: Product,
            },
            {
                path: '',
                component: ProductList,
            }
        ]
    }
];