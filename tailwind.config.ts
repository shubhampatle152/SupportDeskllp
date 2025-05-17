// This file is superseded by tailwind.config.js.
// This .ts file should ideally be removed from the project
// if you are fully migrating to JavaScript.
// To ensure the correct configuration is used if this file is somehow processed,
// we will re-export the configuration from tailwind.config.js.

const config = require('./tailwind.config.js');

module.exports = config;
