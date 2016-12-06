const es2015Parameters = require('babel-plugin-transform-es2015-parameters');
const es2015Destructuring = require('babel-plugin-transform-es2015-destructuring');
const objectRestSpread = require('babel-plugin-transform-object-rest-spread');
const es2015ModulesCommonjs = require('babel-plugin-transform-es2015-modules-commonjs');

function preset(context, opts) {
    const loose = opts && !!opts.loose;
    const useBuiltIns = (opts && opts.useBuiltIns) ? !!opts.useBuiltIns : true;

    const plugins = [
        es2015Parameters,
        [es2015Destructuring, { loose: loose }],
        [objectRestSpread, { useBuiltIns: useBuiltIns }],
        [es2015ModulesCommonjs, { loose: loose }],
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
    value: preset,
});

