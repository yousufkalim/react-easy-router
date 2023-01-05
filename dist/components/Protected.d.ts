/**
 * Protected component to check if the user is authenticated or not and then render the component
 * @author Yousuf Kalim
 */
import { ReactNode, ReactElement } from 'react';
/**
 * Protected
 * @param failureRedirect {string} - The path to redirect if the user is not authenticated
 * @param children {ReactNode} - The component to render if the user is authenticated
 * @returns {ReactElement}
 */
declare function Protected({ failureRedirect, children, }: {
    failureRedirect?: string;
    children: ReactNode;
}): ReactElement;
export default Protected;
