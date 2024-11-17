import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Root from './routes/root';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  { path: '/', element: <Root />, errorElement: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  //  strict mode
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
