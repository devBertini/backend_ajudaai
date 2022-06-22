/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', async () => {
    return { Route: 'Unused Route' }
  })

  //Enterprise Routes
  Route.get('/enterprise', 'EnterprisesController.index')
  Route.get('/enterprise/:id', 'EnterprisesController.show')
  Route.post('/enterprise', 'EnterprisesController.store')
  Route.put('/enterprise/:id', 'EnterprisesController.update')
  Route.delete('/enterprise/:id', 'EnterprisesController.destroy')
}).prefix('/api')
