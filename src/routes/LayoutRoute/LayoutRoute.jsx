import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import Login from '../../auth/Login/Login';
import HomeLayout from '../../layouts/HomeLayout';
import Chefs from '../../components/chefs/chefs';
import Error from '../../components/Shared/Error/Error';

const LayoutRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <HomeLayout />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/chefs',
        element: <Chefs/>,
        loader: () => fetch('https://classy-chefs-server.vercel.app/chefs')
      }
    ],
  },
]);

export default LayoutRoute;
