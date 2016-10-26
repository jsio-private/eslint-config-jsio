'use strict';
const _ = require('lodash');

const defaultConfig = require('./index');


module.exports = _.extend({}, defaultConfig, {
  env: {
    browser: true
  },

  rules: {
    // two spaces with indents for switch/case
    indent: [2, 2, {'SwitchCase': 1}],

    // don't require strict mode
    strict: 0,

    // allow console.log()
    'no-console': 0,

    // allow while(true)
    'no-constant-condition': 0,

    // unused arguments must be prefixed with an underscore
    'no-unused-vars': [2, {'vars': 'all', 'argsIgnorePattern': '^_'}],

    // use single-quotes, unless the string has single-quotes inside it
    // in which case double quotes are ok
    quotes: [2, 'single', 'avoid-escape'],

    // always require semi-colons
    semi: [2, 'always'],

    // require unix line-endings
    'linebreak-style': [2, 'unix']
  },

  globals: {
    require: false,
    // jsio: false,
    module: false,
    // exports: true,
    // Class: false,
    // bind: false,
    // merge: false,
    // logger: false,
    // logging: false,
    DEBUG: false,
    NATIVE: false
  }
});
