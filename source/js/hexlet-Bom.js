  import { htmlEscape } from 'escape-goat';

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

/**
 * This function find all divs and check it whether their have a text content or don't have
 * @param {Object} document
 */

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

/**
 *  This function normalize all cebab-case classes to camel-case style
 * @param {Object} document
 */

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

//Напишите и экспортируйте функцию по умолчанию, которая при отправке формы получает из нее данные и экранирует их. Когда форма заполнена и отправлена (нажата кнопка send), то элемент формы заменяется на другой элемент. Другими словами, вместо формы появляется документ с такой структурой:
{/* <div>
  <p>Feedback has been sent</p>
  <div>Email: test@email.com</div>
  <div>Name: Matz</div>
  <div>Comment: My Comment</div>
</div>
Для экранирования введенных данных используйте функцию htmlEscape() из библиотеки escape-goat. */}

const getFormDataValueAndRender = () => {
  // BEGIN (write your solution here)
  const render = (element, data) => {
    const div = document.createElement('div');
    const { email, name, comment } = data;
    div.innerHTML = `
      <p>Feedback has been sent</p>
      <div>Email: ${htmlEscape(email)}</div>
      <div>Name: ${htmlEscape(name)}</div>
      <div>Comment: ${htmlEscape(comment)}</div>
    `;
    element.replaceWith(div);
  };

  return () => {
    const formElement = document.querySelector('.feedback-form');
    const handle = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);

      render(formElement, Object.fromEntries(formData));
    };
    formElement.addEventListener('submit', handle);
  };
};

/** // Локальное состояние
// Правильный способ работы с состоянием – его локализация относительно приложения. Например, в случае автокомплитов это может быть функция:
 * @param {String}
 * @returns
*/

export default (selector) => {
  const state = {
    // Начальное состояние конкретного автокомплита
  };

  const el = document.querySelector(selector);
  // Логика автокомплита
};

// const autocomplete1 = addAutocomplete('.input1');
// const autocomplete2 = addAutocomplete('.input2');

export {
  moveToURL,
  findAllParagraphs,
  prettify,
  normalizeClasses,
  renderAlertIntoDiv,
  getFormDataValueAndRender
}
