function LocalStorage() {
  this.$storage = localStorage;
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
  return !!window.localStorage;
};

module.exports = LocalStorage;
