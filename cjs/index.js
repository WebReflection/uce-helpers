'use strict';
const queryHelper = (attr, arr) => element => [].reduce.call(
  element.querySelectorAll('[' + attr + ']'),
  (slot, node) => {
    let {parentNode} = node;
    do {
      if (parentNode === element) {
        const name = get(node, attr);
        slot[name] = arr ? [].concat(slot[name] || [], node) : node;
        break;
      }
      else if (/-/.test(parentNode.tagName) || get(parentNode, 'is'))
        break;
    } while (parentNode = parentNode.parentNode);
    return slot;
  },
  {}
);

const get = (child, name) => child.getAttribute(name);
exports.get = get;
const has = (child, name) => child.hasAttribute(name);
exports.has = has;
const ref = queryHelper('ref', false);
exports.ref = ref;
const slot = queryHelper('slot', true);
exports.slot = slot;
