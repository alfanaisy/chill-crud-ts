import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './Layout';
import Home from './routes/home/home.component';
import MyList from './routes/my-list/my-list.component';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: '/my-list', element: <MyList /> },
      ],
    },
    {
      path: '/login',
      element: <h1>Login Page</h1>,
    },
    {
      path: '/register',
      element: <h1>Register Page</h1>,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
