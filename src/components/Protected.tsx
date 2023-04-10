/**
 * Protected component to check if the user is authenticated or not and then render the component
 * @author Yousuf Kalim
 */
import React, { useEffect, ReactNode, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { Auth, Config } from '../Store';
import Loader from './Loader';

/**
 * Protected
 * @param failureRedirect {string} - The path to redirect if the user is not authenticated
 * @param roles
 * @param children {ReactNode} - The component to render if the user is authenticated
 * @returns {ReactElement}
 */
function Protected({
  failureRedirect = '/',
  roles,
  children,
}: {
  failureRedirect?: string;
  roles?: string[];
  children: ReactNode;
}): ReactElement {
  const { auth, setAuth } = Auth(); // Get the auth state from the store
  const {
    config: { isAuthenticated, showLoader },
  } = Config(); // Get the config from the store

  useEffect(() => {
    // Check if the user is authenticated or not
    if (isAuthenticated) {
      isAuthenticated()
        .then((res: any) => {
          if (res) {
            if (roles?.length && roles.includes(res.role)) {
              // If the user is authenticated then set the auth state to true
              return setAuth(true);
            } else if (!roles?.length) {
              // If the user is authenticated then set the auth state to true
              setAuth(true);
            } else {
              setAuth(false);
            }
          } else {
            setAuth(false);
          }
        })
        .catch(() => setAuth(false)); // If the user is not authenticated then set the auth state to false
    } else {
      setAuth(false);
    }
  }, [isAuthenticated, setAuth]);

  // eslint-disable-next-line no-nested-ternary
  return auth === null ? ( // If the auth state is null then show the loader
    showLoader && <Loader />
  ) : auth ? ( // If the auth state is true then render the children
    children
  ) : (
    // If the auth state is false then redirect to the failureRedirect path
    <Navigate to={failureRedirect} />
  );
}

export default Protected;
