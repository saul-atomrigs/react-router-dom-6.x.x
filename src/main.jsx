import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import './index.css';
import Root, {
  loader as rootLoader,
  action as rootAction,
} from './routes/root';
import ErrorPage from './error-page';
import Contact, { loader as contactLoader } from './routes/contact';
import EditContact, { action as editContactAction } from './routes/edit';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route
          path='contacts/:contactId'
          element={<Contact />}
          loader={contactLoader}
        />
        <Route
          path='contacts/:contactId/edit'
          element={<EditContact />}
          loader={contactLoader}
          action={editContactAction}
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
