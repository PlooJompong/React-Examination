import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutMePage from './pages/AboutMePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  { path: '/', element: <AboutMePage />, errorElement: <NotFoundPage /> },
  {
    path: '/projects',
    element: <ProjectsPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
    errorElement: <NotFoundPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
