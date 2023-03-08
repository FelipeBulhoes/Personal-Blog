import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import PandaCooking from './routes/panda-cooking';
import NuKenzie from './routes/nu-kenzie';
import KenzieBurguer from './routes/kenzie-burguer';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "projects/panda-cooking",
    element: <PandaCooking />
  },
  {
    path: "projects/nu-kenzie",
    element: <NuKenzie />
  },
  {
    path: "projects/kenzie-burguer",
    element: <KenzieBurguer />
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);





