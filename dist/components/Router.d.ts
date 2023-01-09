/**
 * Main router component that handles the routing of the application
 * @author Yousuf Kalim
 */
import { ReactElement } from 'react';
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
export default function Router(props: UserProps): ReactElement;
