'use strict';

var pathFn = require('path');

module.exports = function (ctx, name) {
  var source = ctx.page.source || './',
      page_path,
      page;

  if ('string' !== typeof name) {
    throw new TypeError('name must be a string!');
  }

  page_path = pathFn.join(pathFn.dirname(source), name);
  page      = ctx.site.pages.findOne({
    source: page_path
  });

  if (!page) {
    throw new Error('Page: "' + page_path + '" not found.');
  }

  return page;
};
