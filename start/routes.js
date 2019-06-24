'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const AuthRoutes = use('App/Routes/Auth')

// Route.on('/').render('welcome')
Route.get('/', () => ({
  message: 'API works fine',
}))

Route.group(() => {
  AuthRoutes(Route)
}).prefix('/api')

/**
 * @apiDefine BaseForbiddenError
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 403 Forbidden
 * {
    "status": 403,
    "result": "Forbidden "
  }
 */
