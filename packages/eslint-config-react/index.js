'use strict';

module.exports = {
    parser: 'babel-eslint',
    'extends': ['airbnb', '@discovermedia/eslint-config-es6'],
    rules: {
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-indent': ['error', 4],

        // Too many errors/unreliable
        'react/no-unused-prop-types': 0,

        'react/jsx-filename-extension': [2, { extensions: ['.js'] }],

        // propTypes were out of order
        'react/sort-comp': [
            'error', {
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
