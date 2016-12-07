'use strict';

var pluginSyntaxFlow = require('babel-plugin-syntax-flow');

var transformFlowStripTypes = require('babel-plugin-transform-flow-strip-types');
var pluginTcomb = require('babel-plugin-tcomb').default;

function preset(context, opts) {
    var react = opts && !!opts.react;
    var warnOnFailure;
    var reactOpts;
    var tcombOpts;
    var plugins;

    if (process.env.NODE_ENV === 'test') {
        warnOnFailure = true;
    } else if (opts && (opts.warnOnFailure === false)) {
        warnOnFailure = false;
    } else {
        warnOnFailure = true;
    }

    reactOpts = {
        warnOnFailure: warnOnFailure,
        globals: [
            {
                Class: true
            },
            {
                SyntheticEvent: true,
                React$Component: true,
                React$Element: true,
                ReactClass: true
            }
        ]
    };

    tcombOpts = react ? reactOpts : {
        warnOnFailure: warnOnFailure
    };

    plugins = (process.env.NODE_ENV !== 'production') ? [
        pluginSyntaxFlow,
        [pluginTcomb, tcombOpts],
        transformFlowStripTypes
    ] : [
        pluginSyntaxFlow,
        transformFlowStripTypes
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

