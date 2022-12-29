import pathParser from './pathParser';
import elementParser from './elementParser';

export default function getRoutes(routes, parentPath = '') {
  const renderedRoutes = routes.map((route) => {
    // eslint-disable-next-line no-param-reassign
    route.path = pathParser(parentPath, route.path);

    let children = [];
    if (route.children) {
      children = getRoutes(route.children, route.path);
    }

    return [...children, elementParser(route)];
  });

  return renderedRoutes.flat();
}
