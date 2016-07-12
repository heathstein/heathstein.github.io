"use strict";
var superheros_1 = require('./superheros');
var superhero_edit_1 = require('./superhero.edit');
var superhero_add_1 = require('./superhero.add');
var superhero_list_1 = require('./superhero.list');
exports.SuperherosRoutes = [
    {
        path: '',
        redirectTo: '/superheros',
        pathMatch: 'full'
    },
    {
        path: 'superheros',
        component: superheros_1.Superheros,
        children: [
            {
                path: 'add',
                component: superhero_add_1.SuperheroAdd,
            },
            {
                path: ':id',
                component: superhero_edit_1.SuperheroEdit,
            },
            {
                path: '',
                component: superhero_list_1.SuperheroList,
            }
        ]
    }
];
//# sourceMappingURL=superhero.routes.js.map