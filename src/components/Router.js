import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { StoreProvider } from '../Store';
import getRoutes from '../utils/getRoutes';

export default function Router(props) {
  return (
    <BrowserRouter>
      <StoreProvider {...props}>
        <Routes>{getRoutes(props.routes)}</Routes>
      </StoreProvider>
    </BrowserRouter>
  );
}
