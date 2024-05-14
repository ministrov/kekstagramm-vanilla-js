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

const prettify = (document) => {
  const divs = [...document.getElementsByTagName('div')];
  divs.forEach((div) => {
    const textNodes = [...div.childNodes]
        .filter((child) => child instanceof Text)
        .filter((child) => child.textContent.trim() !== '');
    textNodes.forEach((node) => {
      const p = document.createElement('p');
      p.textContent = node.textContent;
      node.replaceWith(p);
    });
  });
};

const normalizeClasses = (document) => {
  const allNodes = [...document.getElementsByTagName('*')];

  allNodes.forEach((node) => {
    const process = (item) => node.classList.replace(item, camelCase(item));
    node.classList.forEach(process);
  });
};

// Изначально на странице есть одна кнопка. Верстка выглядит так:
{/* <button id="alert-generator" class="btn btn-primary">Generate Alert</button>
<div class="alerts m-5"></div>
После клика на кнопку в контейнер с классом alerts добавляется алерт Alert 1:

<div class="alerts m-5">
  <div class="alert alert-primary">Alert 1</div>
</div>
Последующий клик добавляет новый алерт первым в списке:

<div class="alerts m-5">
  <div class="alert alert-primary">Alert 2</div>
  <div class="alert alert-primary">Alert 1</div>
</div>
Каждый клик добавляет новый алерт, меняя число в его имени. */}

const renderAlertIntoDiv = () => {
  const button = document.getElementById('alert-generator');
  const alertsBox = document.querySelector('.alerts');
  let i = 1;
  button.addEventListener('click', () => {
    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-primary');
    alert.textContent = `Alert ${i}`;

    alertsBox.prepend(alert);

    i += 1;
  });
};

export {
  moveToURL,
  findAllParagraphs,
  prettify,
  normalizeClasses,
  renderAlertIntoDiv
}
