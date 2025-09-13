import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import './App.css';
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Architecture from './components/Architecture.tsx';
import Interior from './components/Interior.tsx';
import VR from './components/Vr.tsx';
import Animation from './components/Animation.tsx';
import ErrorPage from './components/ErrorPage.tsx';
import AboutUs from './components/AboutUs.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
  },
  {
    path: '/Vizualtec/',
    element: <App />,
  },
  {
    path: '/Vizualtec/Architecture/',
    element: <Architecture />,
  },
  {
    path: '/Vizualtec/Interior/',
    element: <Interior />,
  },
  {
    path: '/Vizualtec/VR/',
    element: <VR />,
  },
  {
    path: '/Vizualtec/Animation/',
    element: <Animation />,
  },
   {
    path: "/Vizualtec/About/",
    element: <AboutUs />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

