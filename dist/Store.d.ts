/**
 * Store using context api
 * @author Yousuf Kalim
 */
import { ReactElement, ReactNode } from 'react';
export declare function Auth(): any;
export declare function Config(): any;
/**
 * Store Provider with the config provided by the user
 * @param Function to check if the user is authenticated
 * @param showLoader Boolean to show the loader
 * @param loader Image to show as the loader
 * @param children Children of the component
 * @returns {ReactElement}
 * @constructor StoreProvider
 */
interface StoreProps {
    children: ReactNode;
    isAuthenticated?: Function;
    showLoader?: boolean;
    loader?: any;
}
export declare function StoreProvider({ isAuthenticated, showLoader, loader, children, }: StoreProps): ReactElement;
export {};
