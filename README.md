[![Build Status](https://travis-ci.org/mrstebo/node-mithril-storage.svg?branch=master)](https://travis-ci.org/mrstebo/node-mithril-storage) [![npm version](https://badge.fury.io/js/node-mithril-storage.svg)](https://badge.fury.io/js/node-mithril-storage)

# node-mithril-storage

[![Greenkeeper badge](https://badges.greenkeeper.io/mrstebo/node-mithril-storage.svg)](https://greenkeeper.io/)
Node implementation of [mithril-storage](https://github.com/kawan16/mithril-storage).

## How to install
You can install this package using npm.

`npm install node-mithril-storage`

## How to use it

```javascript
var mx = require('node-mithril-storage');
var storage = mx.storage();
// same as
// var storage = mx.storage(mx.DEFAULT_STORAGE_NAME, mx.DEFAULT_STORAGE);

// Add the object to storage
storage.set('test', {message: 'TEST'});

// Get the object from storage.
var test = storage.get('test');

// Remove the key from storage
storage.remove('test');
```

### Available storage types

```javascript
mx.LOCAL_STORAGE // [DEFAULT_STORAGE]
mx.IN_MEMORY_STORAGE
```
