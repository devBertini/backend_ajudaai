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

  //Department Routes
  Route.get('/department/:enterprise_id', 'DepartmentsController.index')
  Route.get('/department/:enterprise_id/:id', 'DepartmentsController.show')
  Route.post('/department', 'DepartmentsController.store')
  Route.put('/department/:id', 'DepartmentsController.update')
  Route.delete('/department/:id', 'DepartmentsController.destroy')

  //Team Routes
  Route.get('/team/:department_id', 'TeamsController.index')
  Route.get('/team/:department_id/:id', 'TeamsController.show')
  Route.post('/team', 'TeamsController.store')
  Route.put('/team/:id', 'TeamsController.update')
  Route.delete('/team/:id', 'TeamsController.destroy')

  //User Routes
  Route.get('/user/:team_id', 'UsersController.index')
  Route.get('/user/:team_id/:id', 'UsersController.show')
  Route.post('/user', 'UsersController.store')
  Route.put('/user/:id', 'UsersController.update')
  Route.delete('/user/:id', 'UsersController.destroy')

  //Status Routes
  Route.get('/status', 'StatusesController.index')
  Route.get('/status/:id', 'StatusesController.show')
  Route.post('/status', 'StatusesController.store')
  Route.put('/status/:id', 'StatusesController.update')
  Route.delete('/status/:id', 'StatusesController.destroy')
}).prefix('/api')
