/**
 * Appending the child path to the parent path
 * @author Yousuf Kalim
 */

/**
 * pathParser
 * @param parent {String} - Parent path
 * @param child {String} - Child path
 * @returns {string|string} - Path
 */
export default function pathParser(parent: string, child: string): string {
  const parentPath = parent.split('/');
  const childPath = child.split('/');

  // removing the duplicates
  const path = [...new Set([...parentPath, ...childPath])].join('/');

  // Add the slash at the start of the path
  return path[0] === '/' ? path : `/${path}`;
}
