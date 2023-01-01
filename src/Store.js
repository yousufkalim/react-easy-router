/**
 * Store using context api
 * @author Yousuf Kalim
 */
import React, { useContext, useState, createContext } from 'react';

// Initializing Create Context Hook
const authContext = createContext();
const configContext = createContext();

// We are also initializing useContexts here
// we only call these functions where we need that data
export function Auth() {
  return useContext(authContext);
}

export function Config() {
  return useContext(configContext);
}

/**
 * Store Provider with the config provided by the user
 * @param isAuthenticated Function to check if the user is authenticated
 * @param showLoader Boolean to show the loader
 * @param loader Image to show as the loader
 * @param children Children of the component
 * @returns {JSX.Element}
 * @constructor StoreProvider
 */
// Initializing Store Provider
// eslint-disable-next-line react/prop-types
export function StoreProvider({ isAuthenticated, showLoader = true, loader, children }) {
  // Initializing State
  const [auth, setAuth] = useState(null);
  const [config] = useState({
    isAuthenticated,
    showLoader,
    loader,
  });

  // Render
  return (
    <authContext.Provider value={{ auth, setAuth }}>
      <configContext.Provider value={{ config }}>{children}</configContext.Provider>
    </authContext.Provider>
  );
}
