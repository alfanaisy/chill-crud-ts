import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import MyListForm from './components/my-list-form/my-list-form.component';
import Layout from './Layout';
import AuthRoute from './routes/auth-route/auth-route.component';
import Home from './routes/home/home.component';
import Login from './routes/login/login.component';
import MyListData from './routes/my-list-data/my-list-data.component';
import MyList from './routes/my-list/my-list.component';
import ProtectedRoute from './routes/protected-route/protected-route.component';
import Register from './routes/register/register.component';
import { useEffect } from 'react';
import { supabase } from './utils/supabase/supabase-client';
import useAuthStore from './stores/auth.store';

function App() {
  const setSession = useAuthStore((state) => state.setSession);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        console.log('session: ', session);
        if (session) {
          setSession(session);
        } else {
          setSession(null);
        }
      }
    );

    const checkInitialSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setSession(session);
      }
    };
    checkInitialSession();

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [setSession]);

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
      </Routes>
    </Router>
  );
}

export default App;
