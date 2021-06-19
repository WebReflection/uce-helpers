self.uceHelpers = (function (exports) {
  'use strict';

  var queryHelper = function queryHelper(attr, arr) {
    return function (element) {
      return [].reduce.call(element.querySelectorAll('[' + attr + ']'), function (slot, node) {
        var parentNode = node.parentNode;

        do {
          if (parentNode === element) {
            var name = get(node, attr);
            slot[name] = arr ? [].concat(slot[name] || [], node) : node;
            break;
          } else if (/-/.test(parentNode.tagName) || get(parentNode, 'is')) break;
        } while (parentNode = parentNode.parentNode);

        return slot;
      }, {});
    };
  };

  var get = function get(child, name) {
    return child.getAttribute(name);
  };
  var has = function has(child, name) {
    return child.hasAttribute(name);
  };
  var ref = queryHelper('ref', false);
  var slot = queryHelper('slot', true);

  exports.get = get;
  exports.has = has;
  exports.ref = ref;
  exports.slot = slot;

  return exports;

}({}));
