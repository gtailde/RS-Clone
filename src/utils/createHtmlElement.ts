export const createHtmlElement = (
  elementClass: string | string[],
  elementName = 'div',
  elementText = ''
): HTMLElement => {
  const element = document.createElement(elementName);

  Array.isArray(elementClass) ? element.className = elementClass.join(' ') : element.className = elementClass;
  
  if(elementText) element.textContent = elementText;

  return element;
};