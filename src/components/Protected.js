import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Auth, Config } from '../Store';
import Loader from './Loader';

function Protected({ failureRedirect = '/', children }) {
  const { auth, setAuth } = Auth();
  const {
    config: { isAuthenticated, showLoader },
  } = Config();

  useEffect(() => {
    if (isAuthenticated) {
      isAuthenticated()
        .then((res) => {
          setAuth(res);
        })
        .catch(() => setAuth(false));
    } else {
      setAuth(false);
    }
  }, [isAuthenticated, setAuth]);

  // eslint-disable-next-line no-nested-ternary
  return auth === null ? (
    showLoader && <Loader />
  ) : auth ? (
    children
  ) : (
    <Navigate to={failureRedirect} />
  );
}

export default Protected;
