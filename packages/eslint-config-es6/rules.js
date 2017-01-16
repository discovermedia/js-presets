'use strict';

var projectDir = process.cwd();

module.exports = {
    plugins: ['promise', 'no-async-without-await'],
    rules: {
        /**
         * Airbnb overrides
         */
        indent: ['error', 4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1
            }
        ],

        'max-len': ['error', 110, 2,
            {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreTrailingComments: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true
            }
        ],

        'quote-props': ['error', 'as-needed',
            {
                keywords: false,
                unnecessary: true,
                numbers: true
            }
        ],

        quotes: ['error', 'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],

        // Always require brackets because it is easier to extend later
        'arrow-body-style': ['error', 'always'],

        // Always require parens because it is more consistent, especially with flow
        'arrow-parens': ['error', 'always'],

        // Webstorm doesn't format async correctly. ignore async for compatibility
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'ignore'
        }],

        /**
         * import
         */
        'import/no-extraneous-dependencies': ['error',
            {
                devDependencies: [
                    '**/*.test.js',
                    '!' + projectDir + '/src/**/*'
                ]
            }
        ],

        /**
         * Too strict
         */
        'import/first': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',

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
         * no async without await
         */
        'no-async-without-await/no-async-without-await': 'error'
    }
};
