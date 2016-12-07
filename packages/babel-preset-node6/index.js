'use strict';

var transformEs2015Parameters = require('babel-plugin-transform-es2015-parameters');
var transformEs2015Destructuring = require('babel-plugin-transform-es2015-destructuring');
var transformObjectRestSpread = require('babel-plugin-transform-object-rest-spread');
var transformEs2015ModulesCommonjs = require('babel-plugin-transform-es2015-modules-commonjs');
var transformAsyncToGenerator = require('babel-plugin-transform-async-to-generator');
var syntaxAsyncFunctions = require('babel-plugin-syntax-async-functions');

function preset() {
    var plugins = [
        syntaxAsyncFunctions,
        transformAsyncToGenerator,
        transformEs2015Parameters,
        [transformEs2015Destructuring, { loose: false }],
        [transformObjectRestSpread, { useBuiltIns: true }],
        [transformEs2015ModulesCommonjs, { loose: false }]
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

