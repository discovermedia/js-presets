'use strict';

module.exports = {
    parser: 'babel-eslint',
    plugins: ['flowtype'],
    'extends': ['plugin:flowtype/recommended'],
    rules: {
        'flowtype/type-id-match': ['error', '^([A-Z][A-Za-z0-9]+)+Type$'],
        'flowtype/object-type-delimiter': ['error', 'comma']
    }
};
