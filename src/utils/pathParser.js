export default function pathParser(parent, child) {
  const parentPath = parent.split('/');
  const childPath = child.split('/');
  const path = [...new Set([...parentPath, ...childPath])].join('/');

  return path[0] === '/' ? path : `/${path}`;
}
