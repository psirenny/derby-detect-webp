Derby Detect Webp
=================

Webp feature detection for [Derby JS](http://derbyjs.com).

Installation
------------

    npm install derby-detect-webp --save

Usage
-----

Add the middleware:

    var app = derby.createApp('...', __filename);
    app.serverUse(module, 'derby-detect-webp');

Check if webp is supported:

    app.get('*', function (page, model, params, next) {
      var hasWebp = model.get('$feature.webp');
      if (hasWebp) return page.render();
      next();
    });

Options
-------

**path** - Specify the path to set webp data. Defaults to **$feature.webp**.
