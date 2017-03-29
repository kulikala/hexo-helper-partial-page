'use strict';

module.exports = function () {
  var re = new RegExp('(?:^|/)' + this.config.partial_dir + '/'),
      route = this.route;

  route.list().forEach(function (page_path) {
    // Partial files are not supposed to be generated
    // nor in the route list
    if (re.test(page_path)) {
      route.remove(page_path);
    }
  });
};
