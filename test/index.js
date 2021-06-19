const {parseHTML} = require('linkedom');
const {document} = parseHTML('<!doctype html><html><head></head><body></body></html>');

const {get, has, slot, ref} = require('../cjs');

console.assert(get({getAttribute(name) { return name }}, 'get') === 'get');
console.assert(has({hasAttribute(name) { return name }}, 'has') === 'has');

document.body.innerHTML = `
  <outer-element>
    <div slot="first">first slot</div>
    <inner-element ref="test">
      <div slot="inner">inner slot</div>
    </inner-element>
    <div is="pinner-element">
      <div slot="pinner">pinner slot</div>
    </div>
    <div slot="last">last slot</div>
  </outer-element>
`.trim();

const slots = slot(document.body.firstElementChild);
const inner = ref(document.body.firstElementChild);

console.assert(Object.keys(slots).join('-') === 'first-last', 'slot');
console.assert(inner.test.matches('inner-element'));

const divs = slot(inner.test).inner;
console.assert(divs.length === 1 && divs[0].matches('div'));
