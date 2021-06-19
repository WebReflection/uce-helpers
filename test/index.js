const {get, has, slot, ref} = require('../cjs');

console.log(get({getAttribute(name) { return name }}, 'get'));
console.log(has({hasAttribute(name) { return name }}, 'has'));
console.log(slot({
    querySelectorAll() {
        
    }
}));