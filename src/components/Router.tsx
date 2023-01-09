/**
 * Main router component that handles the routing of the application
 * @author Yousuf Kalim
 */
import React, { ReactElement } from 'react';
import { Routes } from 'react-router-dom';
import { StoreProvider } from '../Store';
import getRoutes from '../utils/getRoutes';
import { RouteProps } from '../types/types';

/**
 * Router
 * @param props Props passed to the component
 * @returns {ReactElement}
 * @constructor Router
 */
export interface UserProps {
  routes: RouteProps[];
  isAuthenticated?: Function;
  showLoader?: boolean;
  loader?: any;
}
export default function Router(props: UserProps): ReactElement {
  return (
    <StoreProvider {...props}>
      <Routes>{getRoutes(props.routes)}</Routes>
    </StoreProvider>
  );
}
