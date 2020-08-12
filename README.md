# stateless-client-javascript

Brent Sanders  
brent@brentsanders.io  

* [Documentation](https://mwcbrent.github.io/stateless-client-javascript)

Javascript client for Stateless

[![npm version](https://badge.fury.io/js/stateless-client-javascript.svg)](https://badge.fury.io/js/stateless-client-javascript)
[![Build Status](https://travis-ci.org/formulatedautomation/stateless-client-javascript.svg?branch=master)](https://travis-ci.org/formulatedautomation/stateless-client-javascript)
[![Coverage Status](https://coveralls.io/repos/github/formulatedautomation/stateless-client-javascript/badge.svg?branch=master)](https://coveralls.io/github/formulatedautomation/stateless-client-javascript?branch=master)
[![npm](https://img.shields.io/npm/dt/stateless-client-javascript.svg)](https://www.npmjs.com/package/stateless-client-javascript)
[![GitHub license](https://img.shields.io/github/license/formulatedautomation/stateless-client-javascript.svg)](https://github.com/formulatedautomation/stateless-client-javascript/blob/master/LICENSE)
[![Donate](https://img.shields.io/badge/donate-Donarbox-yellow.svg)](https://donorbox.org/rrwen)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/formulatedautomation/stateless-client-javascript.svg?style=social)](https://twitter.com/intent/tweet?text=Javascript%20client%20for%20Stateless:%20https%3A%2F%2Fgithub.com%2Fmwcbrent%2Fstateless-client-javascript%20%23nodejs%20%23npm)

## Install

1. Install [Node.js](https://nodejs.org/en/)
2. Install [stateless-client-javascript](https://www.npmjs.com/package/stateless-client-javascript) via `npm`

```
npm install --save stateless-client-javascript
```

For the latest developer version, see [Developer Install](#developer-install).

## Usage

An example usage of stateless-client-javascript:

```javascript
var statelessclientjavascript = require('stateless-client-javascript');
```

See [Documentation](https://mwcbrent.github.io/stateless-client-javascript) for more details.


## Contributions

1. Reports for issues and suggestions can be made using the [issue submission](https://github.com/formulatedautomation/stateless-client-javascript/issues) interface.
2. Code contributions are submitted via [pull requests](https://github.com/formulatedautomation/stateless-client-javascript/pulls)

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## Developer Notes

### Developer Install

Install the latest developer version with `npm` from github:

```
npm install git+https://github.com/formulatedautomation/stateless-client-javascript
```
  
Install from `git` cloned source:

1. Ensure [git](https://git-scm.com/) is installed
2. Clone into current path
3. Install via `npm`

```
git clone https://github.com/formulatedautomation/stateless-client-javascript
cd stateless-client-javascript
npm install
```

### Tests

1. Clone into current path `git clone https://github.com/formulatedautomation/stateless-client-javascript`
2. Enter into folder `cd stateless-client-javascript`
3. Ensure [devDependencies](https://docs.npmjs.com/files/package.json#devdependencies) are installed and available
4. Run tests
5. Results are saved to [tests/log](tests/log) with each file corresponding to a version tested

```
npm install
npm test
```

### Documentation

Use [documentationjs](https://www.npmjs.com/package/documentation) to generate html documentation in the `docs` folder:

```
npm run docs
```

See [JSDoc style](http://usejsdoc.org/) for formatting syntax.

### Upload to Github

1. Ensure [git](https://git-scm.com/) is installed
2. Inside the `stateless-client-javascript` folder, add all files and commit changes
3. Push to github

```
git add .
git commit -a -m "Generic update"
git push
```

### Upload to npm

1. Update the version in `package.json`
2. Run tests and check for OK status
3. Generate documentation
4. Login to npm
5. Publish to npm

```
npm test
npm run docs
npm login
npm publish
```

### Implementation

The module [stateless-client-javascript](https://www.npmjs.com/package/stateless-client-javascript) uses the following npm packages for its implementation:

npm | Purpose
--- | ---
component | description
component | description
component | description
component | description

```
component   <-- detail
    |
component   <-- detail
    |
component   <-- detail
    |
component   <-- detail
```
