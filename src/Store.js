// Init
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
