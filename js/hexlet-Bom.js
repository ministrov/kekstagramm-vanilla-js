/**
 * При вызове она должна делать переход на страницу и возвращать начальную часть строки с именем совместимого браузера (User agent) * и текущей открытой страницей.
 * @param {String} href
 * @returns {String}
*/

const moveToURL = (href) => {
  window.location.href = href;
  const { userAgent } = window.navigator;
  const [agentName] = userAgent.split(' ');
  console.log(agentName);
  return `${agentName} ${window.location.href}`;
};

/**
 * This function find all p tags in body and get its inner content
 * @param {Object} root
 * @returns {Array} Array of strings
 */

const findAllParagraphs = (root) => {
  const children = Array.from(root.parentNode.body.children);
  return children
    .filter((element) => element.tagName === 'P')
    .map((element) => element.innerHTML.trim());
};

export {
  moveToURL,
  findAllParagraphs
}
