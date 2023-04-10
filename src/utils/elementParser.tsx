/**
 * Parse the routes according to the config provided
 * @author Yousuf Kalim
 */
import React, { ReactElement } from 'react';
import { Route, Navigate } from 'react-router-dom';
import Protected from '../components/Protected';
import { RouteProps } from '../types/types';

/**
 * elementParser
 * @param route {Object} - Route object
 * @returns {ReactElement} - Route element
 */
export default function elementParser(route: RouteProps): ReactElement {
  // Navigated route
  if (route.navigate) {
    return <Route key={route.path} path={route.path} element={<Navigate to={route.navigate} />} />;
  }

  // Protected route
  if (route.protected) {
    // This will call the protected component and pass the route as props
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          <Protected failureRedirect={route.failureRedirect} roles={route.roles}>
            {route.element}
          </Protected>
        }
      />
    );
  }

  // Simple route
  return <Route key={route.path} path={route.path} element={route.element} />;
}
