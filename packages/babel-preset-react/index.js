'use strict';

var presetReact = require('babel-preset-react');
var pluginFlowReactPropTypes = require('babel-plugin-flow-react-proptypes');
var transformReactConstantElements = require('babel-plugin-transform-react-constant-elements');
var transformReactInlineElements = require('babel-plugin-transform-react-inline-elements');
var transformReactJsxSelf = require('babel-plugin-transform-react-jsx-self');
var transformReactJsxSource = require('babel-plugin-transform-react-jsx-source');
var transformReactRemovePropTypes = require('babel-plugin-transform-react-remove-prop-types');

function preset() {
    var presets = [presetReact];

    var env = {
        development: {
            plugins: [
                pluginFlowReactPropTypes,
                transformReactJsxSelf,
                transformReactJsxSource
            ]
        },
        production: {
            plugins: [
                transformReactConstantElements,
                transformReactInlineElements,
                transformReactRemovePropTypes
            ]
        }
    };

    return {
        presets: presets,
        env: env
    };
}

module.exports = preset({});

Object.defineProperty(module.exports, 'buildPreset', {
    configurable: true,
    writable: true,
    enumerable: false,
    value: preset
});

