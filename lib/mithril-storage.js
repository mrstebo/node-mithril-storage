'use strict';

var LocalStorage = require('./storage/local-storage');
var InMemoryStorage = require('./storage/in-memory-storage');

var mx = {};
var storages = {};

mx.LOCAL_STORAGE = 'local';
mx.IN_MEMORY_STORAGE = 'in-memory';
mx.DEFAULT_STORAGE = 'default';
mx.DEFAULT_STORAGE_NAME = 'default';

mx.storage = function storage(name, type) {
  var instance;
  switch (type || mx.DEFAULT_STORAGE) {
    case mx.LOCAL_STORAGE:
      instance = new LocalStorage();
      break;
    case mx.IN_MEMORY_STORAGE:
      instance = new InMemoryStorage();
      break;
    case mx.DEFAULT_STORAGE:
      instance = LocalStorage.isAvailable()
        ? new LocalStorage()
        : new InMemoryStorage();
      break;
    default:
      throw new Error(type + ' is not a valid storage type.');
  }

  storages[name || mx.DEFAULT_STORAGE_NAME] = instance;

  return storages[name || mx.DEFAULT_STORAGE_NAME];
};

module.exports = mx;
