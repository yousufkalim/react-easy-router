/**
 * Parse the routes from the config file
 * @author Yousuf Kalim
 */
import { ReactElement } from 'react';
import { RouteProps } from '../types/types';
/**
 * getRoutes
 * @param routes {Array} - Array of routes
 * @param parentPath {String} - Parent path
 * @returns {*} - Array of rendered routes
 */
export default function getRoutes(routes: RouteProps[], parentPath?: string): ReactElement[];
