'use strict';

module.exports = {
    ecmaFeatures: {
        ecmaVersion: 3
    },
    rules: {
        strict: ['error', 'global'],

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
                keywords: true,
                unnecessary: true,
                numbers: true
            }
        ],

        quotes: ['error', 'single',
            {
                avoidEscape: false,
                allowTemplateLiterals: false
            }
        ]
    }
};
