/**
 * Created by heathstein on 7/9/16.
 */
import {RouterConfig} from '@angular/router';
import {Superheros} from './superheros';
import {SuperheroEdit} from './superhero.edit';
import {SuperheroAdd} from  './superhero.add';
import {SuperheroList} from './superhero.list';

export const SuperherosRoutes: RouterConfig = [
    {
        path: '',
        redirectTo: '/superheros',
        pathMatch: 'full'
    },
    {
        path: 'superheros',
        component: Superheros,
        children: [

            {
                path: 'add',
                component: SuperheroAdd,
            },
            {
                path: ':id',
                component: SuperheroEdit,
            },

            {
                path: '',
                component: SuperheroList,
            }
        ]
    }
];