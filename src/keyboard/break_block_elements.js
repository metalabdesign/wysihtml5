var BLOCK_ELEMENTS = ["PRE", "BLOCKQUOTE"];
var USE_NATIVE_LINE_BREAK_INSIDE_TAGS = ["LI", "P", "H1", "H2", "H3", "H4", "H5", "H6", "PRE", "BLOCKQUOTE"];
var LIST_TAGS = ["UL", "OL", "MENU"];
var dom = wysihtml5.dom;
wysihtml5.views.Composer.RegisterKeyboardHandler(function(e) {
  return (
    e.type == "keydown" && 
    e.keyCode == wysihtml5.ENTER_KEY
  );
}, function(editor, composer, e) {
  var selectedNode = composer.selection.getSelectedNode();
  var blockElement = dom.getParentElement(selectedNode, { 
    nodeName: USE_NATIVE_LINE_BREAK_INSIDE_TAGS 
  }, 4);

  var isBlockElements = BLOCK_ELEMENTS.indexOf(blockElement.nodeName) !== -1
  var isSelectedNodeABlockElements = BLOCK_ELEMENTS.indexOf(selectedNode.nodeName) !== -1

  if (isBlockElements && isSelectedNodeABlockElements && !blockElement.textContent) {
    event.preventDefault();
    composer.selection.executeAndRestore(function() {
      dom.renameElement(selectedNode, "p");
    });
  }

});