"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoke = exports.regression = exports.dev = void 0;
var common = './src/features/**/*.feature \
    --require-module ts-node/register \
    --require ./src/step-definitions/**/*.ts \
    -f json:./reports/report.json \
    --format progress-bar';

//cucumber-js src/features/**/*.feature --require-module ts-node/register --require src/step-definitions/**/**/*.ts

var dev = "".concat(common, " --tags '@dev'");
exports.dev = dev;
var smoke = "".concat(common, " --tags '@smoke'");
exports.smoke = smoke;
var regression = "".concat(common, " --tags '@regression'");
exports.regression = regression;
console.log("\n \u262E\uFE0E \u262E\uFE0E \u262E\uFE0E \u262E\uFE0E \u262E\uFE0E \u262E\uFE0E \u262E\uFE0E \u262E\uFE0E \n");