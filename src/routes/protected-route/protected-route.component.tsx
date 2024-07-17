import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../../stores/auth.store';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const session = useAuthStore((state) => state.session);

  if (!session) return <Navigate to={'/login'} />;

  return children;
};

export default ProtectedRoute;
