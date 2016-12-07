'use strict';

var transformEs2015Parameters = require('babel-plugin-transform-es2015-parameters');
var transformEs2015Destructuring = require('babel-plugin-transform-es2015-destructuring');
var transformObjectRestSpread = require('babel-plugin-transform-object-rest-spread');
var transformEs2015ModulesCommonjs = require('babel-plugin-transform-es2015-modules-commonjs');
var transformAsyncGeneratorFunctions = require('babel-plugin-transform-async-generator-functions');

function preset(context, opts) {
    var loose = opts && !!opts.loose;
    var useBuiltIns = (opts && opts.useBuiltIns) ? !!opts.useBuiltIns : true;

    var plugins = [
        transformAsyncGeneratorFunctions,
        transformEs2015Parameters,
        [transformEs2015Destructuring, { loose: loose }],
        [transformObjectRestSpread, { useBuiltIns: useBuiltIns }],
        [transformEs2015ModulesCommonjs, { loose: loose }]
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

