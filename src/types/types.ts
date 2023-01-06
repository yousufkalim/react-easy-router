import { ReactNode, ReactElement } from 'react';

interface BaseRouteType {
  path: string;
  protected?: boolean;
  failureRedirect?: string;
  children?: RouteProps[];
}

interface ElementType extends BaseRouteType {
  element: ReactElement;
  navigate?: never;
}

interface NavigateType extends BaseRouteType {
  navigate: string;
  element?: never;
}

export type RouteProps = ElementType | NavigateType;

export interface UserProps {
  routes: RouteProps[];
  isAuthenticated?: Function;
  showLoader?: boolean;
  loader?: any;
}

export interface StoreProps {
  children: ReactNode;
  isAuthenticated?: Function;
  showLoader?: boolean;
  loader?: any;
}

interface Config {
  isAuthenticated?: Function;
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
