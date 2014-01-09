/**
 * Checks for trailing line breaks and removes them
 *
 * @param {Element} node The element in which to cleanup
 * @example
 *    wysihtml5.dom.removeTrailingLineBreaks(element);
 */
import { nodeList } from "./node_list";

var removeTrailingLineBreaks = function(node) {
  var childNodes = nodeList.toArray(node.querySelectorAll("br:last-child"));

  for (var index = 0; index < childNodes.length; index++) {
    var childNode = childNodes[index];
    var previousSibling = childNode.previousSibling;
    if(!previousSibling || (previousSibling && previousSibling.nodeName != "BR")) {
      childNode.parentNode.removeChild(childNode);
    }
  }

  return node;
};

export { removeTrailingLineBreaks };