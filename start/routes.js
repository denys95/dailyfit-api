'use strict'

const Route = use('Route')
const AuthRoutes = use('App/Routes/Auth')
const ExerciseRoutes = use('App/Routes/Exercise')

Route.get('/', () => ({
  message: 'API works fine',
}))

Route.group(() => {
  AuthRoutes(Route)
  ExerciseRoutes(Route)
}).prefix('/api/v1')
