function preset(context, opts) {
    const loose = opts && !!opts.loose;
    const useBuiltIns = (opts && opts.useBuiltIns) ? !!opts.useBuiltIns : true;

    const plugins = [
        require('babel-plugin-transform-es2015-parameters'),
        [require('babel-plugin-transform-es2015-destructuring'), { loose: loose }],
        [require('babel-plugin-transform-object-rest-spread'), { useBuiltIns: useBuiltIns }],
        [require('babel-plugin-transform-es2015-modules-commonjs'), { loose: loose }],
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

