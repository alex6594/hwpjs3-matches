"use strict";

require("core-js/modules/es.function.name");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sortHeroesInDescendingHealth;

function sortHeroesInDescendingHealth(data) {
  for (var i = 0; i < data.length - 1; i += 1) {
    if (data[i].name === undefined || data[i].health === undefined || typeof data[i].health === 'string') return null;
  }

  var newArray = data;
  newArray.sort(function (a, b) {
    return b.health - a.health;
  });
  return newArray;
}