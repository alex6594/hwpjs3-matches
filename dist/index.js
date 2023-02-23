"use strict";

var _app = _interopRequireDefault(require("./js/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userObject = [{
  name: 'мечник',
  health: 10
}, {
  name: 'маг',
  health: 100
}, {
  name: 'лучник',
  health: 80
}];
console.log((0, _app.default)(userObject));