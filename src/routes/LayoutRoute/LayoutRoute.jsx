import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import Login from '../../auth/Login/Login';
import HomeLayout from '../../layouts/HomeLayout';

const LayoutRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomeLayout />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default LayoutRoute;
