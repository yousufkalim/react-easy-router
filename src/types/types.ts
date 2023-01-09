import { ReactElement } from 'react';

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
