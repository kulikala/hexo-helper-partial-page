/* global hexo */
'use strict';

// Default value for _config.yml
hexo.config.partial_dir = 'undefined' === typeof hexo.config.partial_dir ? '_partials' : hexo.config.partial_dir;

// Filters
hexo.extend.filter.register('after_init', require('./lib/after_init'));
hexo.extend.filter.register('after_generate', require('./lib/after_generate'));

// Helpers
hexo.extend.helper.register('partial_page', require('./lib/partial_page'));
hexo.extend.helper.register('partial_content', require('./lib/partial_content'));
