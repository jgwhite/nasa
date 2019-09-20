'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        includePaths: ['./config'],
        plugins: [
          require('tailwindcss')('./config/tailwind.js')
        ]
      },
      filter: {
        enabled: true,
        plugins: [
          require('@fullhuman/postcss-purgecss')({
            content: [
              './app/index.html',
              './app/**/*.hbs'
            ],
            extractors: [{
              extractor: class {
                static extract(content) {
                  return content.match(/[\w\-/:]+/g) || [];
                }
              },
              extensions: ['hbs', 'html']
            }],
            whitelistPatterns: [/^-right-\d+$/]
          })
        ]
      }
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
