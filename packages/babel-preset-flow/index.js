function preset(context, opts) {
    const plugins = [
        require('transform-flow-strip-types'),
    ];

    return {
        plugins: plugins
    };
}

module.exports = preset({});

Object.defineProperty(module.exports, "buildPreset", {
    configurable: true,
    writable: true,
    enumerable: false,
    value: preset,
});

