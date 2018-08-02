#!/usr/bin/env node

const meow = require('meow');
const multishot = require('node-proshot').multishot;
const fs = require('fs');

const cli = meow(`
    Usage
        $ mshot PATH_TO_CONFIG_FILE

    Example
        $ mshot config.json

`);

if(!cli.input || cli.input.length !== 1) {
    cli.showHelp();
}

let config = {};

try {
    config = JSON.parse(fs.readFileSync(cli.input[0], 'utf-8'));
} catch (err) {
    console.error('[ERROR] File not found or invalid config file');
    cli.showHelp();
}

const DEFAULT_OPTIONS = {
    path: ".",
    viewport: {
        width: 1280, height: 720
    },
    extension: "png",
    timeout: 5000
}

const options = !!config.options ? config.options : DEFAULT_OPTIONS;

const websites = !!config.websites ? config.websites : [];

if(websites.length < 1) {
    console.log('There should be at least one website to capture');
    cli.showHelp();
}

try {
    (async () => {
        await multishot(websites, options.path, options);
    })();
} catch (err) {
    console.error(err);
}