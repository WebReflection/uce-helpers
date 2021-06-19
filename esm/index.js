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

export const get = (child, name) => child.getAttribute(name);
export const has = (child, name) => child.hasAttribute(name);
export const ref = queryHelper('ref', false);
export const slot = queryHelper('slot', true);
