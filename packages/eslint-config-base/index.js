'use strict';

const projectDir = process.cwd();

module.exports = {
    parser: 'babel-eslint',
    plugins: ['flowtype', 'promise', 'no-async-without-await'],
    extends: ['airbnb-base', 'plugin:flowtype/recommended'],
    rules: {
        /**
         * Airbnb overrides
         */
        indent: ['error', 4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
            },
        ],

        'max-len': ['error', 110, 2,
            {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreTrailingComments: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],

        'quote-props': ['error', 'as-needed',
            {
                keywords: false,
                unnecessary: true,
                numbers: true,
            },
        ],

        quotes: ['error', 'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],

        // Always require brackets because it is easier to extend later
        'arrow-body-style': ['error', 'always'],

        // Always require parens because it is more consistent, especially with flow
        'arrow-parens': ['error', 'always'],

        /**
         * import
         */
        'import/no-extraneous-dependencies': ['error',
            {
                devDependencies: [
                    '**/*.test.js',
                    `!${projectDir}/src/**/*`,
                ],
            },
        ],

        /**
         * Promise
         */
        'promise/always-return': 'error',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'promise/catch-or-return': 'error',
        'promise/no-native': 'off',
        'promise/no-nesting': 'warn',
        'promise/no-promise-in-callback': 'warn',
        'promise/no-callback-in-promise': 'off',
        'promise/avoid-new': 'off',

        /**
         * Flowtype
         */
        'flowtype/type-id-match': ['error', '^([A-Z][A-Za-z0-9]+)+Type$'],
        'flowtype/object-type-delimiter': ['error', 'comma'],

        /**
         * no async without await
         */
        'no-async-without-await/no-async-without-await': 'error',
    },
};
