import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import LayoutRoute from './routes/LayoutRoute/LayoutRoute.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={LayoutRoute}/>
);