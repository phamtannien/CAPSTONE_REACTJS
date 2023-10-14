import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout/HomeLayout'
import Home from '../pages/Home/Home'
import MovieDetail from '../pages/MovieDetail/MovieDetail'
import Login from '../pages/Login/Login'
import Regisster from '../pages/Register/Regisster'
import NoAuGuard from '../guards/NoAuGuard'
import AuthGuard from '../guards/AuthGuard'
import Booking from '../pages/Booking/Booking'
import AdminLayout from '../layouts/AdminLayout/AdminLayout'

import AdminGuard from '../guards/AdminGuard'
import Films from '../pages/Admin/Films/Films'
import Showtime from '../pages/Admin/ShowTime/Showtime'
import AddNew from '../pages/Admin/Films/AddNew/AddNew'
import Edit from '../pages/Admin/Films/Edit/Edit'
import UserManagement from '../pages/Admin/Dashboard/UserManagement'
import AddUser from '../pages/Admin/Dashboard/AddUser/AddUser'
import EditUser from '../pages/Admin/Dashboard/EditUser/EditUser'

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
                path: "/booking/:id",
                element: (
                  <AuthGuard>
                    <Booking />
                  </AuthGuard>
                ),
              },
            {
                path: "/login",
                element: <NoAuGuard>
                    <Login/>
                </NoAuGuard>
            },
            {
                path: "/register",
                element: <Regisster/>,
            },
        ]
       },
       {
        path: "/admin",
        element: <AdminGuard>
          <AdminLayout/>
        </AdminGuard>,
        children: [
          {
            path: "/admin",
            element: <UserManagement/>
          },
          {
            path: "/admin/films",
            element: <Films/>

          },
          {
            path: "/admin/films/addnew",
            element: <AddNew/>

          },
          {
            path: "/admin/films/edit/:movieId",
            element: <Edit/>

          },
          {
            path: "/admin/films/showtime/:movieId",
            element: <Showtime/>

          },
          {
            path: "/admin/user/adduser",
            element: <AddUser/>

          },
          {
            path: "/admin/user/edituser/:taiKhoan",
            element: <EditUser/>

          },
        ]
       }
    ])
  return routing
}
