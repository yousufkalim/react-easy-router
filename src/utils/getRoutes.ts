/**
 * Parse the routes from the config file
 * @author Yousuf Kalim
 */
import { ReactElement } from 'react';
import pathParser from './pathParser';
import elementParser from './elementParser';
import { RouteProps } from '../types/types';

/**
 * getRoutes
 * @param routes {Array} - Array of routes
 * @param parentPath {String} - Parent path
 * @returns {*} - Array of rendered routes
 */
export default function getRoutes(routes: RouteProps[], parentPath = ''): ReactElement[] {
  // Loop through the routes and create the route elements
  const renderedRoutes = routes.map((route) => {
    // eslint-disable-next-line no-param-reassign
    route.path = pathParser(parentPath, route.path); // This will create the path by appending parent path if exist

    let children: ReactElement[] = [];
    if (route.children) {
      // Recursively call the function to get the children routes
      children = getRoutes(route.children, route.path);
    }

    // Create the route element using the element parser
    return [...children, elementParser(route)];
  });

  // Return the flatten array of routes and children
  return renderedRoutes.flat();
}
