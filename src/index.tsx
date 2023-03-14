import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import PandaCooking from './routes/projects//panda-cooking';
import NuKenzie from './routes/projects/nu-kenzie';
import KenzieBurguer from './routes/projects/kenzie-burguer';
import App from './App';
import { LanguageProvider } from './contexts/languageContext';

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
    <LanguageProvider>
      <RouterProvider router={router}/>
    </LanguageProvider>
  </React.StrictMode>
);





