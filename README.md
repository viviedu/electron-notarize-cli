# Electron Notarize CLI

Notarize your Electron apps from the command line

## Installation

```
npm install -g electron-notarize-cli
```

## Usage

```
electron-notarize --bundle-id my.bundle.id --username my.apple.id@example.com --password @keystore:AC_PASSWORD MyApp.app
```

Type `electron-notarize --help` for a description of the available options.

Refer to the [electron-notarize documentation](https://github.com/electron/electron-notarize/blob/master/README.md) for a more in-depth desription of the options.

Please be sure to read the [safety tips for your password](https://github.com/electron/electron-notarize/blob/master/README.md#safety-when-using-appleidpassword).

## Thanks

This is a tiny little module that simply pulls two awesome modules together: [electron-notarize](https://github.com/electron/electron-notarize) and [Yargs](http://yargs.js.org/). Kudos to the developers of those modules.
