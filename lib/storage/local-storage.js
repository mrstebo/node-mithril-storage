var browserStorage = require('browser-storage');

function LocalStorage() {
  this.$storage = browserStorage;
}

LocalStorage.prototype.set = function set(key, value) {
  this.$storage.setItem(key, JSON.stringify(value));
};

LocalStorage.prototype.get = function get(key) {
  return JSON.parse(this.$storage.getItem(key));
};

LocalStorage.prototype.remove = function remove(key) {
  this.$storage.removeItem(key);
};

LocalStorage.isAvailable = function isAvailable() {
  return !!browserStorage;
};

module.exports = LocalStorage;
