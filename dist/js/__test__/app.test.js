"use strict";

var _app = _interopRequireDefault(require("../app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Проверка сортировка по убыванию', function () {
  var data = [{
    name: 'мечник',
    health: 10
  }, {
    name: 'маг',
    health: 100
  }, {
    name: 'лучник',
    health: 80
  }];
  var expectedData = [{
    name: 'маг',
    health: 100
  }, {
    name: 'лучник',
    health: 80
  }, {
    name: 'мечник',
    health: 10
  }];
  var sortingData = (0, _app.default)(data);
  expect(sortingData).toEqual(expectedData);
});
test('проверка на отсутвие поля: name', function () {
  var data = [{
    name: 'мечник',
    health: 10
  }, {
    health: 100
  }, {
    name: 'лучник',
    health: 80
  }];
  var sortingData = (0, _app.default)(data);
  expect(sortingData).toEqual(null);
});
test('проверка на отсутвие поля: health', function () {
  var data = [{
    name: 'мечник',
    health: 10
  }, {
    name: 'маг'
  }, {
    name: 'лучник',
    health: 80
  }];
  var sortingData = (0, _app.default)(data);
  expect(sortingData).toEqual(null);
});
test('проверка поля: health на строку', function () {
  var data = [{
    name: 'мечник',
    health: 10
  }, {
    name: 'маг',
    health: 'health'
  }, {
    name: 'лучник',
    health: 80
  }];
  var sortingData = (0, _app.default)(data);
  expect(sortingData).toEqual(null);
});