module.exports = {
  extends: ["stylelint-config-sass-guidelines"],
  defaultSeverity: "warning",
  rules: {
    "at-rule-no-unknown": null,
    "max-nesting-depth": 6,
    "scss/at-rule-no-unknown": null,
    "selector-class-pattern": "^[a-z][a-z0-9\\-_]*[a-z0-9]$",
    "selector-max-compound-selectors": 5,
    "no-invalid-position-at-import-rule": null,
    "function-no-unknown": true,
    "color-function-notation": "legacy",
  },
};
