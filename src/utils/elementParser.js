/**
 * Parse the routes according to the config provided
 * @author Yousuf Kalim
 */
import { Route, Navigate } from 'react-router-dom';
import Protected from '../components/Protected';

/**
 * elementParser
 * @param route {Object} - Route object
 * @returns {JSX.Element} - Route element
 */
export default function elementParser(route) {
  // Navigated route
  if (route.navigate) {
    return <Route key={route.path} path={route.path} element={<Navigate to={route.navigate} />} />;
  }

  // Protected route
  if (route.protected) {
    // This will call the protected component and pass the route as props
    return (
      <Route
        key={route.path}
        path={route.path}
        element={<Protected failureRedirect={route.failureRedirect}>{route.element}</Protected>}
      />
    );
  }

  // Simple route
  return <Route key={route.path} path={route.path} element={route.element} />;
}
