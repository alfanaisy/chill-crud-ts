import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './Layout';
import Home from './routes/home/home.component';
import MyList from './routes/my-list/my-list.component';
import MyListData from './routes/my-list-data/my-list-data.component';
import Edit from './routes/my-list-data/edit/edit.component';
import Add from './routes/my-list-data/add/add.component';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: '/my-list', element: <MyList /> },
        {
          path: '/my-list-data',
          element: <MyListData />,
        },
        { path: '/my-list-data/add', element: <Add /> },
        { path: '/my-list-data/:id', element: <Edit /> },
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
