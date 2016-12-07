'use strict';

var presetEs2015 = require('babel-preset-es2015');
var transformJscript = require('transform-jscript');
var transformEs3MemberExpressionLiterals = require('transform-es3-member-expression-literals');
var transformEs3PropertyLiterals = require('transform-es3-property-literals');

var startEnv = process.env.NODE_ENV;

if (startEnv !== 'development' && startEnv !== 'test' && startEnv !== 'production') {
    throw new Error(
        'Using `@discovermedia/babel-preset-react` requires that you specify `NODE_ENV`' +
        'environment variable. Valid values are "development", ' +
        '"test", and "production". Instead, received: ' + JSON.stringify(startEnv) + '.'
    );
}

function preset() {
    var presets = [presetEs2015];

    var plugins = [
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

