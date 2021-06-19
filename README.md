# <em>µ</em>ce-helpers

[![Build Status](https://travis-ci.com/WebReflection/uce-helpers.svg?branch=main)](https://travis-ci.com/WebReflection/uce-helpers) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/uce-helpers/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/uce?branch=main)

Common helpers for uce related projects:

  * `slot(element):object` to retrieve all nodes with a `slot="name"` attribute within an element, ignoring slots inside inner custom elements
  * `ref(element):Element?` to retrieve the first element with a specific `ref="name"`
  * `get(element, "attribute-name")` as shortcut for `element.getAttribute(name)`
  * `has(element, "attribute-name")` as shortcut for `element.hasAttribute(name)`
