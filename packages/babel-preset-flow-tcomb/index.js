const tcomb = require('babel-plugin-tcomb');
const dmiFlow = require('@discovermedia/babel-preset-flow');

const reactOpts = {
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

function preset(context, opts) {
    const react = opts && !!opts.react;

    const presets = [dmiFlow];

    const tcombOpts = react ? reactOpts : {};

    const env = {
        development: {
            plugins: [
                [tcomb, tcombOpts],
            ],
        }
    }
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
    value: preset,
});

