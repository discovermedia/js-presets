const tcomb = require('babel-plugin-tcomb').default;
const dmiFlow = require('@discovermedia/babel-preset-flow');

function preset(context, opts) {
    const react = opts && !!opts.react;
    const warnOnFailure = (process.env.NODE_ENV === 'test') || (opts && !!opts.warnOnFailure);

    const presets = [dmiFlow];

    const reactOpts = {
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

    const tcombOpts = react ? reactOpts : {
        warnOnFailure: warnOnFailure,
    };

    const plugins = (process.env.NODE_ENV !== 'production') ?
        [
            [tcomb, tcombOpts],
        ] : [];

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
    value: preset,
});

