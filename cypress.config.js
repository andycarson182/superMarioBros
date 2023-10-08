const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'a7bq2k',
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 60000,
  requestTimeout: 30000,
  responseTimeout: 30000,
  chromeWebSecurity: false,
  video: false,
  reporter: 'cypress-mochawesome-reporter',
  retries: {
    runMode: 2,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('./cypress/plugins/index.js')(on, config)
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});
