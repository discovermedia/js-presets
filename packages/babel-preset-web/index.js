'use strict';

var presetEs2015 = require('babel-preset-es2015');
var transformJscript = require('babel-plugin-transform-jscript');
var transformEs3MemberExpressionLiterals = require('babel-plugin-transform-es3-member-expression-literals');
var transformEs3PropertyLiterals = require('babel-plugin-transform-es3-property-literals');

var transformObjectRestSpread = require('babel-plugin-transform-object-rest-spread');
var syntaxTrailingFunctionCommas = require('babel-plugin-syntax-trailing-function-commas');

var startEnv = process.env.NODE_ENV;

if (startEnv !== 'development' && startEnv !== 'test' && startEnv !== 'production') {
    throw new Error(
        'Using `@discovermedia/babel-preset-react` requires that you specify `NODE_ENV`' +
        'environment variable. Valid values are "development", ' +
        '"test", and "production". Instead, received: ' + JSON.stringify(startEnv) + '.'
    );
}

function preset() {
    var presets = [
        // must specify .buildPreset https://github.com/babel/babel/blob/master/packages/babel-preset-latest/src/index.js#L11
        [presetEs2015.buildPreset, {
            // defaults to true, errors if set
            // modules: true,
            loose: false,
            spec: true
        }]
    ];

    var plugins = [
        syntaxTrailingFunctionCommas,
        // Requires separate polyfill
        [transformObjectRestSpread, { useBuiltIns: true }],
        transformJscript,
        transformEs3MemberExpressionLiterals,
        transformEs3PropertyLiterals
    ];

    return {
        presets: presets,
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

