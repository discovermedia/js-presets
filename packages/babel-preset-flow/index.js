'use strict';

const flowStripTypes = require('babel-plugin-transform-flow-strip-types');

function preset(context, opts) {
    const plugins = [
        flowStripTypes,
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

