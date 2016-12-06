'use strict';

var es2015Parameters = require('babel-plugin-transform-es2015-parameters');
var es2015Destructuring = require('babel-plugin-transform-es2015-destructuring');
var objectRestSpread = require('babel-plugin-transform-object-rest-spread');
var es2015ModulesCommonjs = require('babel-plugin-transform-es2015-modules-commonjs');

function preset(context, opts) {
    var loose = opts && !!opts.loose;
    var useBuiltIns = (opts && opts.useBuiltIns) ? !!opts.useBuiltIns : true;

    var plugins = [
        es2015Parameters,
        [es2015Destructuring, { loose: loose }],
        [objectRestSpread, { useBuiltIns: useBuiltIns }],
        [es2015ModulesCommonjs, { loose: loose }]
    ];

    return {
        plugins: plugins
    };
}

module.exports = preset({});

Object.defineProperty(module.exports, 'buildPreset', {
    configurable: true,
    writable: true,
    enumerable: false,
    value: preset
});

