# artifact-tracer

[![Build Status](https://travis-ci.org/hazelmollusk/artifact-tracer.png?branch=master)](https://travis-ci.org/hazelmollusk/artifact-tracer)
[![Code Climate](https://codeclimate.com/github/hazelmollusk/artifact-tracer/badges/gpa.svg)](https://codeclimate.com/github/hazelmollusk/artifact-tracer)
[![Test Coverage](https://codeclimate.com/github/hazelmollusk/artifact-tracer/badges/coverage.svg)](https://codeclimate.com/github/hazelmollusk/artifact-tracer/coverage)
[![Dependency Status](https://img.shields.io/david/hazelmollusk/artifact-tracer.svg?style=flat-square)](https://david-dm.org/hazelmollusk/artifact-tracer)
[![Download Status](https://img.shields.io/npm/dm/artifact-tracer.svg?style=flat-square)](https://www.npmjs.com/package/artifact-tracer)

> 

## Installation

```
npm install artifact-tracer --save
```

## Documentation

TBD

## Complete Example

Here's an example of a Feathers server that uses `artifact-tracer`. 

```js
const feathers = require('@feathersjs/feathers');
const plugin = require('artifact-tracer');

// Initialize the application
const app = feathers();

// Initialize the plugin
app.configure(plugin());
```

## License

Copyright (c) 2018

Licensed under the [MIT license](LICENSE).
