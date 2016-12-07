Add the following to the project's .stylelintrc.js
```js
module.exports = {
    extends: '@discovermedia/stylelint-config-standard',
    rules: {},
};
```

Add the following to the project's package.json
```json
{
  "scripts": {
    "lint:css": "stylelint --syntax scss 'src/**/*.scss'",
    "lint:css:fix": "stylefmt --config .stylelintrc.js --recursive src/**/*.scss"
  }
}
```
