'use strict';

module.exports = {
  extends: 'standard',
  env: {
    browser: true,
    es6: true
  },
  globals: {
    angular: false,
    $: false,
    QRCode: false,
    _: false,
    io: false
  },
  rules: {
    semi: 0,
    'no-trailing-spaces': [2, { skipBlankLines: false }],
    quotes: [2, 'single', 'avoid-escape'],
    'jsx-quotes': [2, 'prefer-single'],
    'no-debugger': 1,
    'no-undef': 2,
    'no-undef-init': 2,
    indent: [2, 2, { SwitchCase: 1 }],
    camelcase: [2, { properties: 'never' }],
    'no-multiple-empty-lines': [2, {
      max: 2,
      maxBOF: 0,
      maxEOF: 1
    }]
  }
};

