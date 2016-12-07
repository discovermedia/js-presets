'use strict';

var pluginSyntaxFlow = require('babel-plugin-syntax-flow');

var transformFlowStripTypes = require('babel-plugin-transform-flow-strip-types');
var pluginTcomb = require('babel-plugin-tcomb').default;

var env = process.env.NODE_ENV;

if (env !== 'development' && env !== 'test' && env !== 'production') {
    throw new Error(
        'Using `@discovermedia/babel-preset-flow` requires that you specify `NODE_ENV`' +
        'environment variable. Valid values are "development", ' +
        '"test", and "production". Instead, received: ' + JSON.stringify(env) + '.'
    );
}

function preset(context, opts) {
    var react = opts && !!opts.react;
    var warnOnFailure;
    var reactOpts;
    var tcombOpts;
    var plugins;
    var environments;

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

    environments = {
        development: {
            plugins: [
                pluginSyntaxFlow,
                [pluginTcomb, tcombOpts],
                transformFlowStripTypes
            ]
        },
        production: {
            plugins: [
                pluginSyntaxFlow,
                transformFlowStripTypes
            ]
        },
        test: {
            plugins: [
                pluginSyntaxFlow,
                [pluginTcomb, tcombOpts],
                transformFlowStripTypes
            ]
        }
    };

    plugins = environments[env] ? environments[env].plugins : [];

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

