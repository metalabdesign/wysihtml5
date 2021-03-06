var addClass = function(element, className) {
  var classList = element.classList;
  if (classList) {
    return classList.add(className);
  }
  if (hasClass(element, className)) {
    return;
  }
  element.className += " " + className;
};

var removeClass = function(element, className) {
  var classList = element.classList;
  if (classList) {
    return classList.remove(className);
  }
  
  element.className = element.className.replace(new RegExp("(^|\\s+)" + className + "(\\s+|$)"), " ");
};

var hasClass = function(element, className) {
  var classList = element.classList;
  if (classList) {
    return classList.contains(className);
  }
  
  var elementClassName = element.className;
  return (elementClassName.length > 0 && (elementClassName == className || new RegExp("(^|\\s)" + className + "(\\s|$)").test(elementClassName)));
};

export {addClass, removeClass, hasClass};
