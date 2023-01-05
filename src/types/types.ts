import { ReactNode } from 'react';

export interface RouteProps {
  path: string;
  navigate?: string;
  element?: ReactNode;
  protected?: boolean;
  failureRedirect?: string;
  children?: RouteProps[];
}

export interface UserProps {
  routes: RouteProps[];
  isAuthenticated: Function;
  showLoader: boolean;
  loader: any;
}

export interface StoreProps {
  children: ReactNode;
  isAuthenticated: Function;
  showLoader: boolean;
  loader: any;
}

interface Config {
  isAuthenticated: Function;
  showLoader: boolean;
  loader: any;
}

export interface AuthContextInterface {
  auth: boolean | null;
  setAuth: Function;
}

export interface ConfigContextInterface {
  config: Config;
}
