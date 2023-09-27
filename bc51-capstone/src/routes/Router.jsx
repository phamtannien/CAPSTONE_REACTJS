import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout/HomeLayout'
import Home from '../pages/Home/Home'
import MovieDetail from '../pages/MovieDetail/MovieDetail'
import Login from '../pages/Login/Login'

export default function Router() {
   const routing = useRoutes([
       {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/movie-detail/:movieId",
                element: <MovieDetail/>,
            },
            {
                path: "/login",
                element: <Login/>,
            },
        ]
       }
    ])
  return routing
}
