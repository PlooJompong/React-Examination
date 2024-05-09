import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * createBrowserRouter is a function that creates a new router
 * It takes an array of routes as an argument,
 * where each route is an object with 2 or more properties:
 * path: a string that is the path that the route matches, and
 * element: a React component that is rendered when the route is matched.
 * errorElement: a React component that is rendered when the route is not matched.
 */
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
  /**
   * RouterProvider is a component that provides the router context
   * to all the components below it in the component tree.
   */
  return <RouterProvider router={router} />;
};

export default App;
