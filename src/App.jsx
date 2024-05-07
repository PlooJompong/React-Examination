import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  { path: '/', element: <AboutPage />, errorElement: <NotFoundPage /> },
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
