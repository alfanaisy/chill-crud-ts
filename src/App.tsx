import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { useEffect } from 'react';
import MyListForm from './components/my-list-form/my-list-form.component';
import Layout from './Layout';
import AuthRoute from './routes/auth-route/auth-route.component';
import Home from './routes/home/home.component';
import Login from './routes/login/login.component';
import MyListData from './routes/my-list-data/my-list-data.component';
import MyList from './routes/my-list/my-list.component';
import ProtectedRoute from './routes/protected-route/protected-route.component';
import Register from './routes/register/register.component';
import useAuthStore from './stores/auth.store';
import OAuthCallback from './routes/oauth-callback/oauth-callback.component';

function App() {
  const init = useAuthStore((state) => state.init);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="my-list" element={<MyList />} />
          <Route path="my-list-data" element={<MyListData />} />
          <Route path="my-list-data/add" element={<MyListForm />} />
          <Route path="my-list-data/edit/:id" element={<MyListForm />} />
        </Route>
        <Route
          path="/login"
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }
        />
        <Route
          path="/register"
          element={
            <AuthRoute>
              <Register />
            </AuthRoute>
          }
        />
        <Route path="/oauth/callback" element={<OAuthCallback />} />
      </Routes>
    </Router>
  );
}

export default App;
