import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import useUserStore from '../../stores/user.store';

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const currentUser = useUserStore((state) => state.currentUser);

  if (!currentUser) return <Navigate to={'/login'} />;

  return children;
};

export default ProtectedRoute;
