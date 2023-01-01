/**
 * Main router component that handles the routing of the application
 * @author Yousuf Kalim
 */
import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { StoreProvider } from '../Store';
import getRoutes from '../utils/getRoutes';

/**
 * Router
 * @param props Props passed to the component
 * @returns {JSX.Element}
 * @constructor Router
 */
export default function Router(props) {
  return (
    <BrowserRouter>
      <StoreProvider {...props}>
        <Routes>{getRoutes(props.routes)}</Routes>
      </StoreProvider>
    </BrowserRouter>
  );
}
