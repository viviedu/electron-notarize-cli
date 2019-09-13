#!/usr/bin/env node
const { notarize } = require("electron-notarize")
const args = require("yargs")
.command('$0', "Notarize an electron shell app", (yargs) => {
	yargs.positional("file", {
		describe: "Path to the app",
		type: "string",
	})
}, (argv) => {
	argv.appPath = argv._[0]
})
.option("app-bundle-id", {
	alias: [ "id", "bundle-id", "b" ],
	demandOption: true,
	describe: "Primary app bundle ID",
	type: "string",
})
.option("apple-id", {
	alias: [ "username", "u" ],
	demandOption: true,
	describe: "The username of your apple developer account",
	type: "string",
})
.option("apple-id-password", {
	alias: [ "password", "p" ],
	demandOption: true,
	describe: "The password for your aple developer account",
	type: "string",
})
.option("asc-provider", {
	alias: [ "team-id", "t" ],
	describe: "Your Team ID in App Store Connect",
	type: "string",
})
.argv

args.appPath = args._[0]

var p = notarize(args)
.then(result => {
	console.log("Notarization succeeded", result)
}, error => {
	console.log("Notarization failed:", error)
	process.exit(1)
})
