Record your root path to a module.

# Install

```
npm i git+http://github.com/npmatichs/basedir --save
```

# Use

At the entry point of application set the root path, and require everywhere after this, but remember do not overwrite value of module.
```
// entrypoint.js
let baseDir = require('basedir');

baseDir.set(__dirname);

// somewhere.js
const __baseDir = require('basedir').get();

```