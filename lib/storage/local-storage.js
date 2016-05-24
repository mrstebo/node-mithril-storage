var NodeLocalStorage = require('node-localstorage');
var storage = localStorage;

if (typeof localStorage === 'undefined' || localStorage === null) {
  storage = new NodeLocalStorage.LocalStorage('./localstorage');
}

function LocalStorage() {
  this.$storage = storage;
}

LocalStorage.prototype.set = function set(key, value) {
  this.$storage.setItem(key, JSON.stringify(value));
};

LocalStorage.prototype.get = function get(key) {
  return JSON.parse(this.$storage.getItem(key));
};

LocalStorage.prototypae.remove = function remove(key) {
  this.$storage.removeItem(key);
};

LocalStorage.isAvailable = function isAvailable() {
  return !!storage;
};

module.exports = LocalStorage;
