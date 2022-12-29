import { Route, Navigate } from 'react-router-dom';
import Protected from '../components/Protected';

export default function elementParser(route) {
  if (route.navigate) {
    return <Route key={route.path} path={route.path} element={<Navigate to={route.navigate} />} />;
  }

  if (route.protected) {
    return (
      <Route
        key={route.path}
        path={route.path}
        element={<Protected failureRedirect={route.failureRedirect}>{route.element}</Protected>}
      />
    );
  }

  return <Route key={route.path} path={route.path} element={route.element} />;
}
