import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import Login from '../../auth/Login/Login';
import HomeLayout from '../../layouts/HomeLayout';
import Chefs from '../../components/chefs/chefs';
import Error from '../../components/Shared/Error/Error';
import Recipies from '../../components/Recipies/Recipies';
import RecipePage from '../../components/RecipePage/RecipePage';

const LayoutRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
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
        element: <Chefs />,
        loader: () => fetch('https://classy-chefs-server.vercel.app/chefs'),
      },
      {
        path: '/recipies',
        element: <Recipies />,
        loader: () => fetch('https://classy-chefs-server.vercel.app/recipies'),
      },
      {
        path: '/recipe/:id',
        element: <>Hello</>
      }
    ],
  },
]);

export default LayoutRoute;
