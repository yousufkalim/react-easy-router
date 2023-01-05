/**
 * Store using context api
 * @author Yousuf Kalim
 */
import React, { useContext, useState, createContext, ReactElement } from 'react';
import { AuthContextInterface, ConfigContextInterface, StoreProps } from './types/types';

// Initializing Create Context Hook
const authContext = createContext<AuthContextInterface | null>(null);
const configContext = createContext<ConfigContextInterface | null>(null);

// We are also initializing useContexts here
// we only call these functions where we need that data
export function Auth(): any {
  return useContext(authContext);
}

export function Config(): any {
  return useContext(configContext);
}

/**
 * Store Provider with the config provided by the user
 * @param Function to check if the user is authenticated
 * @param showLoader Boolean to show the loader
 * @param loader Image to show as the loader
 * @param children Children of the component
 * @returns {ReactElement}
 * @constructor StoreProvider
 */
// Initializing Store Provider
// eslint-disable-next-line react/prop-types
export function StoreProvider({
  isAuthenticated,
  showLoader = true,
  loader = 'https://i.imgur.com/FhvNntt.gif',
  children,
}: StoreProps): ReactElement {
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
