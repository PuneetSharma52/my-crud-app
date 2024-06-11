const Route = use('Route')

Route.get('/', async ({ view }) => {
  return view.render('home')
})

Route.get('/login', async ({ view }) => {
  return view.render('auth.login')
})

Route.post('/login', 'SessionController.create')
Route.get('/logout', 'SessionController.destroy')

// Protect routes
Route.group(() => {
  Route.get('/tasks', 'TaskController.index')
  Route.get('/tasks/create', 'TaskController.create')
  Route.post('/tasks', 'TaskController.store')
  Route.get('/tasks/:id/edit', 'TaskController.edit')
  Route.put('/tasks/:id', 'TaskController.update')
  Route.delete('/tasks/:id', 'TaskController.destroy')
}).middleware('auth')

// const Route = use('Route')

// 'use strict'

// /*
// |--------------------------------------------------------------------------
// | Routes
// |--------------------------------------------------------------------------
// |
// | Http routes are entry points to your web application. You can create
// | routes for different URL's and bind Controller actions to them.
// |
// | A complete guide on routing is available here.
// | http://adonisjs.com/docs/4.1/routing
// |
// */

// /** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
// const Route = use('Route')

// Route.get('/tasks', 'TaskController.index')
// Route.get('/tasks/create', 'TaskController.create')
// Route.post('/tasks', 'TaskController.store')
// Route.get('/tasks/:id/edit', 'TaskController.edit')
// Route.put('/tasks/:id', 'TaskController.update')
// Route.delete('/tasks/:id', 'TaskController.destroy')
