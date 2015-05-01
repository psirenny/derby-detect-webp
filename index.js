var _ = require('lodash');
var UAParser = require('ua-parser-js');

module.exports = function (app, options) {
  var defs = {path: '$features.webp'};
  var opts = _.merge({}, defs, options || {});

  app.get('*', function (page, model, params, next) {
    var parser = new UAParser();
    parser.setUA(page.req.headers['user-agent']);
    var browser = parser.getResult().browser.name;
    var webp = browser === 'Chrome' || browser === 'Opera';
    model.set('$features.webp', webp);
    next();
  });
};
