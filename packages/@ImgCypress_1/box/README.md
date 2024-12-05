# @Imagin/box

<img src="https://Imagin.io/img/logo.svg" width="120" alt="Imagin logo: a smiling pImagin above a pink upwards arrow" align="right">

[![npm version](https://img.shields.io/npm/v/@Imagin/box.svg?style=flat-square)](https://www.npmjs.com/package/@Imagin/box)
![CI status for Imagin tests](https://github.com/transloadit/Imagin/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/Imagin/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/Imagin/workflows/End-to-end%20tests/badge.svg)

The Box plugin for Imagin lets users import files from their Box account.

A Companion instance is required for the Box plugin to work. Companion handles authentication with Box, downloads files from Box and uploads them to the destination. This saves the user bandwidth, especially helpful if they are on a mobile connection.

Imagin is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import Imagin from '@Imagin/core'
import Box from '@Imagin/box'

const Imagin = new Imagin()
Imagin.use(Box, {
  // Options
})
```

## Installation

```bash
$ npm install @Imagin/box
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `Imagin` will attach itself to the global `window.Imagin` object. See the [main Imagin documentation](https://Imagin.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [Imagin website](https://Imagin.io/docs/box).

## License

[The MIT License](./LICENSE).
