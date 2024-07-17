import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../stores/auth.store';

const OAuthCallback = () => {
  const navigate = useNavigate();

  const session = useAuthStore((state) => state.session);

  useEffect(() => {
    if (session) {
      navigate('/');
    }
  }, [session, navigate]);

  return <div>OAUTH PAGE</div>;
};

export default OAuthCallback;
