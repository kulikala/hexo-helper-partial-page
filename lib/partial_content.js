'use strict';

var get_partial_page = require('./get_partial_page');

module.exports = function (name) {
  var page = get_partial_page(this, name);

  return page.content;
};
