function InMemoryStorage() {
  this.$storage = {};
}

InMemoryStorage.prototype.set = function set(key, value) {
  this.$storage[key] = JSON.stringify(value);
};

InMemoryStorage.prototype.get = function get(key) {
  if (this.$storage[key]) {
    return JSON.parse(this.$storage[key]);
  }
  return undefined;
};

InMemoryStorage.prototype.remove = function remove(key) {
  delete this.$storage[key];
};

module.exports = InMemoryStorage;
