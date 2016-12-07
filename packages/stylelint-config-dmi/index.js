'use strict';

module.exports = {
    'extends': 'stylelint-config-standard',
    rules: {
        indentation: 4,

        'value-no-vendor-prefix': true,
        'property-no-vendor-prefix': true,
        'selector-no-vendor-prefix': true,
        'media-feature-name-no-vendor-prefix': true,
        'at-rule-no-vendor-prefix': true,

        'selector-pseudo-class-no-unknown': [
            true, {
                ignorePseudoClasses: ['global']
            }
        ],
        'property-no-unknown': [
            true, {
                ignoreProperties: [
                    'composes'
                ]
            }
        ]
    }
};
