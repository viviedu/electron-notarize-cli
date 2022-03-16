#!/usr/bin/env node

const { notarize } = require('electron-notarize')

const args = require('yargs')
.command('$0', 'Notarize an electron shell app', (yargs) => {
  yargs.positional('file', {
    describe: 'Path to the app',
    type: 'string',
  })
}, (argv) => {
  argv.appPath = argv._[0]
})
.option('tool', {
  describe: 'The notarization tool to use, default is legacy. Can be legacy or notarytool. notarytool is substantially (10x) faster.',
  type: 'string'
})
.option('app-bundle-id', { // for legacy only
  alias: [ 'id', 'bundle-id', 'b' ],
  describe: 'The app bundle identifier your Electron app is using. E.g. com.github.electron',
  type: 'string'
})
.option('asc-provider', { // for legacy only
  describe: 'Your Team Short Name',
  type: 'string'
})
.option('apple-id', {
  alias: [ 'username', 'u' ],
  describe: 'The username of your apple developer account',
  type: 'string'
})
.option('apple-id-password', {
  alias: [ 'password', 'p' ],
  describe: 'The app-specific password (not your Apple ID password).',
  type: 'string'
})
.option('team-id', { // for notarytool username/password auth only
  describe: 'The team ID you want to notarize under.',
  type: 'string'
})
.option('apple-api-key', {
  alias: [ 'api-key' ],
  describe: 'Required for JWT authentication.',
  type: 'string'
})
.option('apple-api-key-id', { // for notarytool JWT auth only
  alias: [ 'api-key-id' ],
  describe: 'Required for JWT authentication.',
  type: 'string'
})
.option('apple-api-issuer', {
  alias: [ 'api-issuer' ],
  describe: 'Issuer ID. Required if appleApiKey is specified',
  type: 'string'
})
.option('keychain', { // for notarytool keychain auth only
  describe: 'The name of the keychain or path to the keychain you stored notarization credentials in.',
  type: 'string'
})
.option('keychain-profile', { // for notarytool keychain auth only
  describe: 'The name of the profile you provided when storing notarization credentials.',
  type: 'string'
})
.argv

notarize(args)
.then(() => {
  console.log('Notarization succeeded')
}, error => {
  console.error('Notarization failed:', error.message)
  process.exit(1)
})
