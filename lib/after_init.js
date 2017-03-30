'use strict';

module.exports = function () {
  var config = this.config;

  if (!config.include) {
    config.include = [];
  } else if (!Array.isArray(config.include)) {
    config.include = [config.include];
  }

  // Add `partial_dir` to `include` config
  // hexo's processor will add source files in `partial_dir` to route list
  // otherwise files in directories starts from '_'
  // are treated as hidden files in hexo
  config.include.push('{,**/}' + config.partial_dir + '/**');
};
