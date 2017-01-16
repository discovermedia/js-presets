'use strict';

module.exports = {
    parser: 'babel-eslint',
    'extends': ['airbnb', '@discovermedia/eslint-config-es6/rules'],
    rules: {
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-indent': ['error', 4],

        // Too many errors/unreliable
        'react/no-unused-prop-types': 'off',

        'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],

        /**
         * too strict
         */
        'react/no-unescaped-entities': 'warn',
        'react/no-array-index-key': 'warn',
        'react/require-default-props': 'off',
        'react/forbid-prop-types': ['warn', { forbid: ['any', 'array', 'object'] }],

        /**
         * fix for eslint ordering
         */
        // 'class-methods-use-this': ['error', {
        //     exceptMethods: [
        //         'render',
        //         'getInitialState',
        //         'getDefaultProps',
        //         'getChildContext',
        //         'componentWillMount',
        //         'componentDidMount',
        //         'componentWillReceiveProps',
        //         'shouldComponentUpdate',
        //         'componentWillUpdate',
        //         'componentDidUpdate',
        //         'componentWillUnmount',
        //     ],
        // }],

        // propTypes were out of order
        'react/sort-comp': [
            'warn', {
                order: [
                    'displayName',
                    'propTypes',
                    'contextTypes',
                    'childContextTypes',
                    'mixins',
                    'static-methods',
                    '/^on.+$/',
                    '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
                    'everything-else',
                    '/^render.+$/',
                    'render'
                ]
            }
        ]
    }
};
